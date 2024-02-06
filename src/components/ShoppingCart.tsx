import { useCharacter } from "../context/CharacterContext";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";

function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useCharacter();

  console.log(isOpen);

  return (
    isOpen && (
      <>
        <span>CHART is open </span>
        <button onClick={closeCart}>X</button>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <h3>
          Total{" "}
          {cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)}
        </h3>
      </>
    )
  );
}

export default ShoppingCart;
