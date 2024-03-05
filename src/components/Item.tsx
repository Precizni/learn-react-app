type ItemProps = {
  item: {
    id: number;
    packed: boolean;
    description: string;
    quantity: number;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  console.log(item);
  return (
    <li className="p-5">
      <input
        className="mr-2"
        type="checkbox"
        value={String(item.packed)}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="ml-1" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

export default Item;
