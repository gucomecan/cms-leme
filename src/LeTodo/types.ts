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

export type DefaultCategoryT = 'Family & Friends' | 'Health' | 'Fun & hobbies' | 'Work';
export const DefaultCategoryEnum = createEnumFromUnion<DefaultCategoryT>([
  'Family & Friends',
  'Fun & hobbies',
  'Health',
  'Work',
]);
export type CategoryT = DefaultCategoryT | string;

export const DefaultCategories: DefaultCategoryT[] = Object.values(DefaultCategoryEnum);

export type ItemT = {
  id: string;
  title: string;
  description?: string;
  category?: CategoryT;
};
