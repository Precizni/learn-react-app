import { NavLink } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

function ActiveUser() {
  const { FAKE_USER } = useAuth();

  return (
    <>
      <div>welcome {FAKE_USER.name}! </div>
      <NavLink to="../web-shop" relative="path">
        Go to our web shop
      </NavLink>
    </>
  );
}

export default ActiveUser;
