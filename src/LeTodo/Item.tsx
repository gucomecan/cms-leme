import { ChangeEvent, useMemo, useState } from 'react';
import { ItemT } from './types';

type Prop = {
  onAdd: (item: ItemT) => void;
  viewMode?: boolean;
  initData?: ItemT;
  onDelete?: (id?: string) => void;
  onEdit?: (item: ItemT) => void;
};

const noData = (data?: ItemT) => !data?.title && !data?.description;

const Item = ({ onAdd, onDelete, onEdit, viewMode, initData }: Prop) => {
  const [data, setData] = useState<ItemT | undefined>(initData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const noModification = viewMode && !isEditing;

  const handleReset = () => setData(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, itemProp: keyof ItemT) => {
    setData((prev) => ({ ...prev, [itemProp]: event.target.value } as ItemT));
  };

  const hasNoData = useMemo(() => noData(data), [data]);

  const handleAdd = () => {
    if (hasNoData) return;

    onAdd(data!);
    handleReset();
  };

  const handleEdit = () => {
    setIsEditing(false);

    if (hasNoData) {
      data?.id && onDelete?.(data.id);
      return;
    }

    onEdit?.(data!);
  };

  return (
    <>
      <div>
        <label htmlFor="item-title">Title</label>
        <input
          disabled={noModification}
          type="text"
          id="item-title"
          value={data?.title ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'title')}
          style={{ marginRight: 20, marginLeft: 10 }}
        />

        <label htmlFor="item-description">Description</label>
        <input
          disabled={noModification}
          type="text"
          id="item-description"
          value={data?.description ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
          style={{ marginLeft: 10 }}
        />
        <br />
        {noModification && <button onClick={() => setIsEditing(true)}>✏️</button>}
        {viewMode && isEditing && <button onClick={handleEdit}>💾</button>}
        {viewMode && <button onClick={() => onDelete?.(data?.id)}>❌</button>}
      </div>
      {!viewMode && (
        <button style={{ marginTop: 20 }} disabled={hasNoData} onClick={handleAdd}>
          ➕
        </button>
      )}
    </>
  );
};

export default Item;
