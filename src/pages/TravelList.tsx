import { useState } from "react";

import Form from "../components/Form";
import PackingList from "../components/PackingList";
import Stats from "../components/Stats";

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
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <h1>🏕️ Middle-Earth trip 🌋</h1>
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default TravelList;
