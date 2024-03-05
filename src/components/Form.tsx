import { useState } from 'react';

type FormProps = {
  onAddItems: (item: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }) => void;
};

function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  console.log(description, quantity);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription('');
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="rounded-md border-2 p-1 shadow-md focus:outline-stone-500"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="rounded-md border-2 p-1 shadow-md focus:outline-stone-500"
      />
      <button className="rounded-md border-2 p-1">Add</button>
    </form>
  );
}

export default Form;
