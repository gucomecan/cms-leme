import { Item } from './Item';
import { useTodo } from './Store/useTodo';
import { UserCategoryT } from './Store/types';

export type Props = {
  category: UserCategoryT;
};

const List = ({ category }: Props) => {
  const {
    items: { itemsIds },
  } = useTodo(category);

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
  );
};

export default List;
