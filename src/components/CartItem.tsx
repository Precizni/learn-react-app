import { useCharacter } from "../context/CharacterContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useCharacter();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>
      <img src={item.imgUrl} alt={item.name} height={"120px"} />
      <div>
        <div>
          {item.name}
          {quantity > 1 && <span> x{quantity}</span>}
        </div>
        <div>{`${item.price} €`}</div>
        <div>{`total price ${item.price * quantity} €`}</div>
        <button onClick={() => removeFromCart(item.id)}>remove</button>
      </div>
    </div>
  );
}

export default CartItem;
