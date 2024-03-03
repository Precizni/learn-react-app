import ShoppingCart from '../components/ShoppingCart';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

//space-x-10 space-y-10

function WebShop() {
  return (
    <>
      <ShoppingCart />

      <div className="mb-20 flex flex-wrap justify-center">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default WebShop;
