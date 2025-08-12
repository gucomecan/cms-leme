import { useState } from 'react';

import { useTodo } from './Store/useTodo';

export const AddCategory = () => {
  const [newCategory, setNewCategory] = useState<string>('');
  const {
    fn: { addCategory },
  } = useTodo();

  return (
    <h2>
      <input style={{ marginRight: 10 }} value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <button disabled={!newCategory} className={'button'} onClick={() => addCategory(newCategory)}>
        Add category
      </button>
    </h2>
  );
};
