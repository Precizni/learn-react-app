import SearchImg from '/imgs/search-lotr.jpg';
import ListImg from '/imgs/list-lotr.jpg';
import QuotesImg from '/imgs/quotes-lotr.jpg';
import ShopImg from '/imgs/shop-lotr.jpg';
import { NavLink } from 'react-router-dom';

//  bg-slate-800/50 p-2

function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="relative m-5">
        <NavLink to="/character-info">
          <img
            src={SearchImg}
            alt="Search"
            className="size-72 cursor-pointer rounded-lg object-cover outline outline-1 outline-offset-2 brightness-75 contrast-75 hover:outline-4"
          />
          <div className="pointer-events-none absolute bottom-5 left-32 right-5 text-right text-white">
            Lord of the Rings
            <h2 className="text-2xl font-semibold">Search</h2>
          </div>
        </NavLink>
      </div>
      <div className="relative m-5">
        <NavLink to="/travel-list">
          <img
            src={ListImg}
            alt="List"
            className="size-72 cursor-pointer rounded-lg object-cover outline outline-1 outline-offset-2 brightness-75 contrast-75 hover:outline-4"
          ></img>
          <div className="pointer-events-none absolute bottom-5 left-32 right-5 text-right text-white">
            Middle-Earth adventure
            <h2 className="text-2xl font-semibold">List</h2>
          </div>
        </NavLink>
      </div>
      <div className="relative m-5">
        <NavLink to="/character-quotes">
          <img
            src={QuotesImg}
            alt="Quotes"
            className="size-72 cursor-pointer rounded-lg object-cover outline outline-1 outline-offset-2 brightness-75 contrast-75 hover:outline-4"
          ></img>
          <div className="pointer-events-none absolute bottom-5 left-32 right-5 text-right text-white">
            Famous characters
            <h2 className="text-2xl font-semibold">Quotes</h2>
          </div>
        </NavLink>
      </div>
      <div className="relative m-5">
        <NavLink to="/web-shop">
          <img
            src={ShopImg}
            alt="Shop"
            className="size-72 cursor-pointer rounded-lg object-cover outline outline-1 outline-offset-2 brightness-75 contrast-75 hover:outline-4"
          />
          <div className="pointer-events-none absolute bottom-5 left-32 right-5 text-right text-white">
            Special offers
            <h2 className="text-2xl font-semibold">Shop</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
