import { useCharacter } from '../context/CharacterContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';

function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useCharacter();

  return (
    isOpen && (
      <div className="bg-slate-100 px-5 py-8 shadow-xl xl:px-20">
        <div className="mb-10 flex flex-row justify-between">
          <h1 className="text-center text-2xl font-bold">Shopping Cart</h1>
          <button
            onClick={closeCart}
            className="rounded-full border-2 border-stone-500 px-2 hover:opacity-50"
          >
            Close
          </button>
        </div>

        <div>
          {cartItems.length === 0 && (
            <div className="text-sm">Add items to cart</div>
          )}
          <div className="flex flex-wrap justify-center ">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
        </div>
        <h3 className="mt-7 text-center text-xl font-bold">
          Total{' '}
          {Math.round(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0) * 100,
          ) / 100}{' '}
          €
        </h3>
      </div>
    )
  );
}

export default ShoppingCart;
