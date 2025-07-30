import { useState } from 'react';

type Props = {
  addCategory: (category: string) => void;
};

export const AddCategory = ({ addCategory }: Props) => {
  const [newCategory, setNewCategory] = useState<string>('');
  return (
    <h2>
      <input style={{ marginRight: 10 }} value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <button disabled={!newCategory} onClick={() => addCategory(newCategory)}>
        Add category
      </button>
    </h2>
  );
};
