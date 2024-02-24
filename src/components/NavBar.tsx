import { NavLink } from 'react-router-dom';
import UserDisplay from './UserDisplay';
import { useCharacter } from '../context/CharacterContext';
import { useAuth } from '../context/LoginContext';

function NavBar() {
  const { isAuthenticated } = useAuth();
  const { openCart, cartQuantity } = useCharacter();

  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between">
        <NavLink to="/" className="rounded-lg hover:bg-amber-400">
          <div className="m-2 inline-block">LOGO (Home)</div>
        </NavLink>

        <NavLink to="/login" className="rounded-lg hover:bg-amber-400">
          <div className="m-2 inline-block">Login</div>
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
      <div className="flex justify-end">
        {isAuthenticated && cartQuantity > 0 && (
          <NavLink to="/web-shop">
            <button onClick={openCart}>
              chart
              <div>{cartQuantity}</div>
            </button>
          </NavLink>
        )}
        <UserDisplay />
      </div>
    </div>
  );
}

export default NavBar;
