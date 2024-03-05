import { useState } from 'react';

import Form from '../components/Form';
import PackingList from '../components/PackingList';
import Stats from '../components/Stats';

type ItemProps = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};

function TravelList() {
  const [items, setItems] = useState<ItemProps[]>([]);

  console.log(items);

  function handleAddItems(item: ItemProps) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="my-16 flex flex-col items-center">
      <h1 className="mb-10 text-4xl font-bold"> Middle-Earth 🏕️ 🌋</h1>
      <Stats items={items} />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
    </div>
  );
}

export default TravelList;
