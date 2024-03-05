import { useCharacter } from '../context/CharacterContext';
import storeItems from '../data/items.json';

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCharacter();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="m-5">
      <img
        src={item.imgUrl}
        alt={item.name}
        className="mb-1 size-20 rounded-lg border-4 border-red-700 object-cover"
      />
      <div className="flex h-32 w-20 flex-col justify-between">
        <div className="text-sm">{item.name}</div>
        <div className="text-sm">
          {`${item.price} €`} {quantity > 1 && <span> x{quantity}</span>}
        </div>
        <div className="text-sm font-bold">{`${item.price * quantity} €`}</div>
        <button
          className="mt-2 rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
          onClick={() => removeFromCart(item.id)}
        >
          remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
