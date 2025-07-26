import { ChangeEvent, useState } from 'react';
import { ItemT } from './types';

type Prop = {
  onAdd: (item: ItemT) => void;
  viewMode?: boolean;
  initData?: ItemT;
  onDelete?: (id?: string) => void;
  onEdit?: (item: ItemT) => void;
};

const Item = ({ onAdd, onDelete, onEdit, viewMode, initData }: Prop) => {
  const [data, setData] = useState<ItemT | undefined>(initData);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const noModification = viewMode && !isEditing;
  const noData = () => !data?.title && !data?.description;

  const handleReset = () => setData(undefined);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, itemProp: keyof ItemT) => {
    setData((prev) => ({ ...prev, [itemProp]: event.target.value } as ItemT));
  };

  const handleAdd = () => {
    if (noData()) return;

    onAdd(data!);
    handleReset();
  };

  const handleEdit = () => {
    setIsEditing(false);

    if (noData()) {
      data?.id && onDelete?.(data.id);
      return;
    }

    onEdit?.(data!);
  };

  return (
    <>
      <div>
        <input
          disabled={noModification}
          type="text"
          id="item-title"
          value={data?.title ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'title')}
        />
        <input
          disabled={noModification}
          type="text"
          id="item-description"
          value={data?.description ?? ''}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e, 'description')}
        />
        {noModification && <button onClick={() => setIsEditing(true)}>Edit</button>}
        {viewMode && isEditing && <button onClick={handleEdit}>Save</button>}
        {viewMode && <button onClick={() => onDelete?.(data?.id)}>Delete</button>}
      </div>
      {!viewMode && <button onClick={handleAdd}>Add</button>}
    </>
  );
};

export default Item;
