// TODO: move utils out
// ------ UTILS -------
/**
 * Function that take create a Record(object) where every key is the same as its corresponding value and
 * every key is based on a Union type keys.
 * @function createEnumFromUnion
 * @template T - A string literal type.
 * @param {T[]} arr - array of string that are part of Union type(there is type safety)
 * @returns {Record<T, T>} - Record that include all keys from a Union type as key and value
 */
export const createEnumFromUnion = <T extends string>(arr: T[]): Record<T, T> => {
  return arr.reduce((acc, val) => {
    acc[val] = val;
    return acc;
  }, {} as Record<T, T>);
};

// -------- TYPES ---------
// NOTE:
// testR - record data
// testT - type
// testC - category related

// ** Categories **
export type DefaultCategory = 'No category 🚧';
export type PredefinedCategoryT =
  | 'Family & Friends 👩‍👧‍👦'
  | 'Health 🧬️'
  | 'Fun & hobbies 🎨'
  | 'Work 🏢'
  | DefaultCategory;
export const PredefinedCategoryEnum = createEnumFromUnion<PredefinedCategoryT>([
  'Family & Friends 👩‍👧‍👦',
  'Fun & hobbies 🎨',
  'Health 🧬️',
  'Work 🏢',
  'No category 🚧',
]);
export const PredefinedCategories: PredefinedCategoryT[] = Object.values(PredefinedCategoryEnum);

export type UserCategoryT = PredefinedCategoryT | string;

export type SystemCategoriesT = 'Trash' | 'Favorite';
export const SystemCategoriesEnum = createEnumFromUnion<SystemCategoriesT>(['Favorite', 'Trash']);
export const SystemCategories: SystemCategoriesT[] = Object.values(SystemCategoriesEnum);

// ** Items **
export type ItemIdT = string;

export type ItemT = {
  id: ItemIdT;
  title: string;
  category: UserCategoryT;
  description?: string;
  systemCategory?: SystemCategoriesT;
  isDone?: boolean;
  // TODO: add custom type for due data - today, tomorrow
  dueDate?: Date;
  tags?: {
    isUrgent?: boolean;
    isImportant?: boolean;
    isFavorite?: boolean;
    inTrash?: boolean;
  };
};

// ** Context **
export type CategoryNamesRT = Record<UserCategoryT, ItemIdT[]>;
export type ItemRT = Record<ItemIdT, ItemT>;

// methods
export type AddedItemT = Omit<ItemT, 'id' | 'category'>;
export type AddItemT = (item: AddedItemT, categoryName?: UserCategoryT) => void;
export type EditItemT = (item: ItemT) => void;
export type DeleteItemT = (id: string, categoryName: UserCategoryT) => void;
export type AddCategoryT = (category: UserCategoryT) => void;
export type DeleteCategoryT = (category: UserCategoryT) => void;

export type GetCategoryData = (categoryName: UserCategoryT) => ItemRT;
export type GetItemData = (categoryName: UserCategoryT, id: string) => ItemT;
// return value
export type TodoContextT = {
  categories: {
    categoriesR: CategoryNamesRT;
    userCategories: UserCategoryT[];
    systemCategories: SystemCategoriesT[];
  };
  items: {
    itemsR: ItemRT;
    itemsIds?: ItemIdT[];
  };
  fn: {
    addItem: AddItemT;
    editItem: EditItemT;
    deleteItem: DeleteItemT;
    addCategory: AddCategoryT;
    deleteCategory: DeleteCategoryT;
  };
  // CRUD
  // getCategoryData: GetCategoryData;
  // getItemData: GetItemData;
  // renderCategories: (Component: React.ComponentType<ListT>) => ReactElement;
};
