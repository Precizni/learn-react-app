import ShoppingCart from '../components/ShoppingCart';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

function WebShop() {
  return (
    <>
      <ShoppingCart />

      <div className="my-16 flex flex-wrap justify-center xl:mx-96">
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
