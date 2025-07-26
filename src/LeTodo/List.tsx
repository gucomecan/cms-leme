import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from './Item';
import { ItemT } from './types';

const List = () => {
  const [list, setList] = useState<ItemT[]>([]);

  const handleAdd = (item: ItemT) => {
    setList((prev) => [...prev, { ...item, id: uuidv4() }]);
  };
  const handleEdit = (item: ItemT) => {
    const itemToIditIndex = list.findIndex((i) => i.id === item.id);
    if (isNaN(itemToIditIndex)) {
      setList((prev) => {
        prev[itemToIditIndex] = item;

        return prev;
      });
    }
  };

  const handleDelete = (id?: string) => {
    if (!id) return;

    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <>
      <div>
        {list.map((item) => (
          <Item viewMode key={item.id} onAdd={handleAdd} initData={item} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </div>
      <div>
        <Item onAdd={handleAdd} />
      </div>
    </>
  );
};

export default List;
