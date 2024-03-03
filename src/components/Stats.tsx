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
      <p className="mb-16 w-80 text-center">
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="mb-16 w-80 text-center">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go!'
          : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
