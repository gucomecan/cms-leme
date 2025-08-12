import { useTodo } from './Store/useTodo';
import { UserCategoryT } from './Store/types';

type Props = {
  category: UserCategoryT;
};

export const DeleteCategory = ({ category }: Props) => {
  const {
    fn: { deleteCategory },
  } = useTodo();
  return (
    <button
      onClick={() => deleteCategory(category)}
      style={{
        padding: 5,
        fontSize: 15,
        position: 'absolute',
        right: -10,
        top: -10,
        borderRadius: '50%',
        border: '1px dashed rgb(200, 50, 50)',
        textAlign: 'center',
      }}
    >
      ❌
    </button>
  );
};
