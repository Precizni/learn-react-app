import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";

function UserDisplay() {
  const { FAKE_USER, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return isAuthenticated ? (
    <div>
      <img src={FAKE_USER.avatar} alt={FAKE_USER.name} />
      <span>{FAKE_USER.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  ) : null;
}

export default UserDisplay;
