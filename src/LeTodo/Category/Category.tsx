import List from './List';
import { useTodo } from '../store/useTodo';
import { AddCategory } from './AddCategory';
import { DeleteCategory } from './DeleteCategory';

export const Category = () => {
  const {
    categories: { userCategories },
  } = useTodo();

  return (
    <>
      <AddCategory />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        {userCategories?.map((category) => (
          <div
            key={category}
            style={{ flexBasis: '45%', border: '2px solid pink', marginBottom: 30, padding: 20, position: 'relative' }}
          >
            <List key={category} category={category} />
            <DeleteCategory category={category} />
          </div>
        ))}
      </div>
    </>
  );
};
