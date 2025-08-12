import { useContext } from 'react';

import { UserCategoryT } from './types';
import { TodoContext } from './ToDoProvider';

export const useTodo = (category?: UserCategoryT) => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('Context must be used within a Provider');
  }
  const itemsIds = category ? context.categories.categoriesR[category] : [];
  return { ...context, items: { ...context.items, itemsIds } };
};
