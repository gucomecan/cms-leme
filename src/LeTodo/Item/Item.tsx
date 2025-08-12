import { ChangeEvent, useMemo, useState } from 'react';

import './Item.css';
import { useTodo } from '../Store/useTodo';
import { ItemT, UserCategoryT } from '../Store/types';

type Prop = {
  category: UserCategoryT;
  id?: string;
  viewMode?: boolean;
};

const noData = (data?: Partial<ItemT>) => !data?.title && !data?.description;

export const Item = ({ category, id, viewMode }: Prop) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const {
    items: { itemsR },
    fn: { addItem, editItem, deleteItem },
  } = useTodo();
  const [data, setData] = useState(() => (id ? itemsR[id] : undefined));
  const itemCategory = data?.category ?? category;

  const noModification = viewMode && !isEditing;
  const hasNoData = useMemo(() => noData(data), [data]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, itemProp: keyof ItemT) => {
    setData((prev) => ({ ...prev, [itemProp]: event.target.value } as ItemT));
  };

  const handleAdd = () => {
    if (hasNoData) return;

    addItem(data!, itemCategory);
    setData(undefined);
  };

  const handleEdit = () => {
    setIsEditing(false);

    if (hasNoData) {
      data?.id && deleteItem?.(data.id, itemCategory);
      return;
    }

    editItem?.(data!);
  };

  const handleDelete = () => {
    if (hasNoData) return;

    if (data?.id) {
      deleteItem(data.id, itemCategory);
    }
  };

  return (
    <>
      <div>
        <div className="item-row">
          <label htmlFor="item-title">Title</label>
          <input
            disabled={noModification}
            type="text"
            id="item-title"
            value={data?.title ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'title')}
          />
        </div>
        <div className="item-row">
          <label htmlFor="item-description">Description</label>
          <input
            disabled={noModification}
            type="text"
            id="item-description"
            value={data?.description ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
          />
        </div>
        <br />
        {noModification && <button onClick={() => setIsEditing(true)}>✏️</button>}
        {viewMode && isEditing && <button onClick={handleEdit}>💾</button>}
        {viewMode && <button onClick={handleDelete}>❌</button>}
      </div>
      {!viewMode && (
        <button style={{ marginTop: 20 }} disabled={hasNoData} onClick={handleAdd}>
          ➕
        </button>
      )}
    </>
  );
};
