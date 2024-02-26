import { NavLink } from 'react-router-dom';
import UserDisplay from './UserDisplay';
import { useCharacter } from '../context/CharacterContext';
import { useAuth } from '../context/LoginContext';
import cart from '/imgs/cart.svg';
import HomeIcon from '/imgs/home-outline.svg';
import LoginIcon from '/imgs/log-in-outline.svg';

function NavBar() {
  const { isAuthenticated } = useAuth();
  const { openCart, cartQuantity } = useCharacter();

  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between">
        <NavLink to="/" className="rounded-lg hover:bg-amber-400">
          <img
            src={HomeIcon}
            alt="homeIcon"
            className="m-2 inline-block size-9"
          />
        </NavLink>

        <NavLink to="/login" className="rounded-lg hover:bg-amber-400">
          <img
            src={LoginIcon}
            alt="loginIcon"
            className="m-2 inline-block size-9"
          />
        </NavLink>
      </div>

      <div className="flex justify-between">
        <NavLink to="/character-info" className="rounded-lg hover:bg-amber-400">
          <div className="m-2 inline-block">Search</div>
        </NavLink>
        <NavLink to="/travel-list" className="rounded-lg hover:bg-amber-400">
          <div className="m-2 inline-block">List</div>
        </NavLink>
        <NavLink
          to="/character-quotes"
          className="rounded-lg hover:bg-amber-400"
        >
          <div className="m-2 inline-block">Quotes</div>
        </NavLink>

        <NavLink to="/web-shop" className="rounded-lg hover:bg-amber-400">
          <div className="m-2 inline-block">Shop</div>
        </NavLink>
      </div>
      <div className="mb-7 flex justify-end">
        {isAuthenticated && cartQuantity > 0 && (
          <NavLink
            to="/web-shop"
            onClick={openCart}
            className="relative m-2 flex size-16 justify-center rounded-full border border-stone-950 hover:opacity-50"
          >
            <button>
              <img src={cart} alt="cart" className="size-12 " />
              <div className="absolute bottom-0 right-0 flex size-6 flex-col justify-center rounded-full bg-red-600 text-center text-sm text-slate-50 opacity-90">
                {cartQuantity}
              </div>
            </button>
          </NavLink>
        )}
        <UserDisplay />
      </div>
    </div>
  );
}

export default NavBar;
