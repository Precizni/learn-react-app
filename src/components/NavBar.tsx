import { NavLink } from "react-router-dom";
import UserDisplay from "./UserDisplay";
import { useCharacter } from "../context/CharacterContext";
import { useAuth } from "../context/LoginContext";

function NavBar() {
  const { isAuthenticated } = useAuth();
  const { openCart, cartQuantity } = useCharacter();

  return (
    <>
      <UserDisplay />

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/character-info">Character info</NavLink>
        </li>
        <li>
          <NavLink to="/travel-list">Travel list</NavLink>
        </li>
        <li>
          <NavLink to="/character-quotes">Character quotes</NavLink>
        </li>
        <li>
          <NavLink to="/web-shop">Web shop</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      {isAuthenticated && cartQuantity > 0 && (
        <NavLink to="/web-shop">
          <button onClick={openCart}>
            Shopping cart
            <div>{cartQuantity}</div>
          </button>
        </NavLink>
      )}
      <h1>Header</h1>
    </>
  );
}

export default NavBar;
