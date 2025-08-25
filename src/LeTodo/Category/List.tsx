import { Item } from '../Item'
import { useTodo } from '../store/useTodo'
import { UserCategoryT } from '../store/types'
import { memo } from 'react'

export type Props = {
  category: UserCategoryT
}

const List = memo(
  ({ category }: Props) => {
    const {
      items: { itemsIds },
    } = useTodo(category)

    return (
      <>
        <h2>{category}</h2>
        <div style={itemsIds.length ? { border: '2px dashed orange', marginBottom: 20, padding: 20 } : {}}>
          {itemsIds.map((id) => (
            <Item viewMode key={id} id={id} category={category} />
          ))}
        </div>
        <div>
          <Item category={category} />
        </div>
      </>
    )
  },
  (prev, next) => prev.category === next.category
)

export default List
