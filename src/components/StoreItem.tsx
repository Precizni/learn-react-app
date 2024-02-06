import { useCharacter } from "../context/CharacterContext";

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
    <div>
      <img src={imgUrl} alt={name} height={"200px"} />
      <div>
        <span>{name}</span>
        <span>{`  ${price} €`}</span>
      </div>
      <div>
        {quantity === 0 ? (
          <button onClick={() => increaseCartQuantity(id)}>
            + Add to Cart
          </button>
        ) : (
          <div>
            <div>
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <div>
                <span>{quantity}</span> in cart
              </div>
              <button onClick={() => increaseCartQuantity(id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(id)}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default StoreItem;
