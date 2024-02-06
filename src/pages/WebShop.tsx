import ShoppingCart from "../components/ShoppingCart";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

// moving properties this way? <StoreItem {...item} />
function WebShop() {
  return (
    <>
      <ShoppingCart />
      <h2>Web shop</h2>
      <div>
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
