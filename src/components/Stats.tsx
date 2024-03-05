type StatsProps = {
  items: {
    id: number;
    packed: boolean;
    description: string;
    quantity: number;
  }[];
};

function Stats({ items }: StatsProps) {
  console.log(items);
  if (!items.length)
    return (
      <div className="mb-2 w-80 text-center text-xl">
        <h2>Start adding some items to your packing list</h2>
      </div>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="mb-2 w-80 text-center text-xl">
      <h2>
        {percentage === 100
          ? 'You got everything! Ready to go!'
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </h2>
    </footer>
  );
}

export default Stats;
