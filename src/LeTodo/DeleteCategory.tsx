type Props = {
  category: string;
  removeCategory: (category: string) => void;
};

export const DeleteCategory = ({ category, removeCategory }: Props) => {
  return (
    <button
      onClick={() => removeCategory(category)}
      style={{ padding: 2, fontSize: 10, position: 'absolute', right: -5, top: -5 }}
    >
      ❌
    </button>
  );
};
