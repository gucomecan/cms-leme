import { useState } from 'react';

import List from './List';
import { CategoryT, DefaultCategories } from './types';
import { warnings } from './tran';
import { AddCategory } from './AddCategory';
import { DeleteCategory } from './DeleteCategory';

export const Dashboard = () => {
  const [categories, setCategories] = useState<CategoryT[]>(DefaultCategories);
  const [warning, setWarning] = useState('');
  const [error, setError] = useState('');

  const resetWarAndErr = () => {
    setError('');
    setWarning('');
  };

  const addCategory = (category: string) => {
    const exist = categories.some((prevCategory) => prevCategory.toLocaleLowerCase() === category.toLocaleLowerCase());

    if (exist) {
      setWarning(warnings.categoryExist);
      return;
    }

    setCategories((prev) => [...prev, category]);
    resetWarAndErr();
  };

  const removeCategory = (category: string) => {
    setCategories((prev) => prev.filter((cat) => cat !== category));
    resetWarAndErr();
  };

  return (
    <>
      <AddCategory addCategory={addCategory} />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {categories.map((category) => (
          <div
            key={category}
            style={{ flexBasis: '45%', border: '2px solid pink', marginBottom: 30, padding: 20, position: 'relative' }}
          >
            <List category={category} />
            <DeleteCategory category={category} removeCategory={removeCategory} />
          </div>
        ))}
      </div>
      {warning && <p style={{ color: 'orange' }}>{warning}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  );
};
