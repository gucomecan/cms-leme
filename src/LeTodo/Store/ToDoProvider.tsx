import { v4 as uuidv4 } from 'uuid'
import { createContext, ReactNode, useCallback, useState } from 'react'

import {
  AddedItemT,
  CategoryNamesRT,
  ItemRT,
  ItemT,
  PredefinedCategories,
  PredefinedCategoryEnum,
  SystemCategories,
  TodoContextT,
  UserCategoryT,
} from './types'
import { warnings } from '../tran'

export const TodoContext = createContext<TodoContextT | undefined>(undefined)
const defaultCategory = PredefinedCategoryEnum['No category 🚧']

export const ToDoProvider = ({ children }: { children: ReactNode }) => {
  const [categoriesR, setCategoriesR] = useState<CategoryNamesRT>(() => {
    const catR: CategoryNamesRT = {}
    PredefinedCategories.forEach((category) => {
      catR[category] = []
    })
    return catR
  })
  const [itemsR, setItemsR] = useState<ItemRT>({})
  const [error, setError] = useState('')
  const [warning, setWarning] = useState('')

  const userCategories = Object.keys(categoriesR)

  // ---- Items CRUD ----
  const addItem = useCallback((item: AddedItemT, category: UserCategoryT = defaultCategory) => {
    const id = uuidv4()
    const newItem = { ...item, id, category }
    setItemsR((prevItems) => ({ ...prevItems, [id]: newItem }))

    setCategoriesR((prevCategories) => ({ ...prevCategories, [category]: [...prevCategories[category], id] }))
  }, [])

  const editItem = useCallback((item: ItemT) => {
    if (item.id && itemsR[item.id]) {
      setItemsR((prevItemsR) => {
        prevItemsR[item.id] = { ...prevItemsR[item.id], ...item }
        return prevItemsR
      })
    }
  }, [])

  const deleteItem = useCallback((id: string, category: UserCategoryT = defaultCategory) => {
    if (itemsR[id]) {
      const { [id]: _, ...rest } = itemsR
      setItemsR(rest)
      const items = categoriesR[category]
      const newItems = items.filter((itemId) => itemId !== id)
      setCategoriesR((prevCategories) => ({ ...prevCategories, [category]: newItems }))
    }
  }, [categoriesR])

  // ---- Categories CRUD ----
  const addCategory = useCallback((category: UserCategoryT) => {
    const exist = userCategories.some((prevCategory) => prevCategory === category)
    if (exist) {
      setWarning(warnings.categoryExist)
      return
    }

    setCategoriesR((prevCategoriesR) => ({ ...prevCategoriesR, [category]: [] }))
  }, [userCategories])

  const deleteCategory = useCallback((category: UserCategoryT) => {
    if (categoriesR[category]) {
      const { [category]: _, ...rest } = categoriesR
      setCategoriesR(rest)
    }

    // resetWarAndErr();
  }, [categoriesR])

  // ---- Categories CRUD ----
  // const getItem = (category: CategoryNameT) => categoriesItems?.[category];
  // const deleteCategory = (category: CategoryNameT) => {};
  // const moveToCategory = (oldCategory: CategoryNameT, newCategory: CategoryNameT, item: ItemT) => {};

  // NOTE: expose CRUD operation + data for now
  const toExpose = {
    categories: {
      categoriesR,
      userCategories,
      systemCategories: SystemCategories,
    },
    items: { itemsR, itemsIds: [] },
    fn: {
      addItem,
      editItem,
      deleteItem,
      addCategory,
      deleteCategory,
    },
  }

  return <TodoContext.Provider value={toExpose}>{children}</TodoContext.Provider>
}
