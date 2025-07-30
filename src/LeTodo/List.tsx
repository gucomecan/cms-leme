import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from './Item';
import { CategoryT, ItemT } from './types';

type Props = {
  category?: CategoryT;
};

const List = ({ category }: Props) => {
  // NOTE: need a endpoint that fetch
  const [items, setItems] = useState<ItemT[]>([]);
  const handleAdd = (item: ItemT) => {
    setItems((prev) => [...prev, { ...item, id: uuidv4() }]);
  };

  const handleEdit = (item: ItemT) => {
    const itemToIditIndex = items.findIndex((i) => i.id === item.id);
    if (isNaN(itemToIditIndex)) {
      setItems((prev) => {
        prev[itemToIditIndex] = item;

        return prev;
      });
    }
  };

  const handleDelete = (id?: string) => {
    if (!id) return;

    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <>
      <h2>{category}</h2>
      <div style={items.length ? { border: '2px dashed orange', marginBottom: 20, padding: 20 } : {}}>
        {items.map((item) => (
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
