import { useState } from 'react';
import Item from './Item';

type PackingListProps = {
  items: {
    id: number;
    packed: boolean;
    description: string;
    quantity: number;
  }[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
  onClearList: () => void;
};

function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}: PackingListProps) {
  const [sortBy, setSortBy] = useState('input');

  console.log(sortBy);
  console.log(items);

  let sortedItems: {
    id: number;
    packed: boolean;
    description: string;
    quantity: number;
  }[] = [];

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="my-10">
      <ul className="flex h-60 w-80 flex-wrap overflow-auto">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
