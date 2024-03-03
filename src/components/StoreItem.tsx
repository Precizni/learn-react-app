import { useCharacter } from '../context/CharacterContext';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCharacter();

  const quantity = getItemQuantity(id);

  return (
    <div className="m-10">
      <img
        src={imgUrl}
        alt={name}
        className="size-48 rounded-lg border-4 border-double border-amber-300 object-cover"
      />
      <div className="mt-2">
        <span>{name}</span>
        <span className="font-bold">{`  ${price} €`}</span>
      </div>
      <div className="mt-1">
        {quantity === 0 ? (
          <button
            className="rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to cart
          </button>
        ) : (
          <div>
            <div>
              <button
                onClick={() => decreaseCartQuantity(id)}
                className="rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
              >
                -
              </button>
              <span className="mx-2 font-bold">{quantity}</span>
              <button
                onClick={() => increaseCartQuantity(id)}
                className="rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(id)}
                className="ml-2 rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreItem;
