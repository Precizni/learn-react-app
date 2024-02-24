import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/LoginContext';

function ActiveUser() {
  const { FAKE_USER, logout } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate('/');
  }

  return (
    <div>
      <div>welcome {FAKE_USER.name}. </div>
      <NavLink to="../web-shop" relative="path">
        Go to our web shop!
      </NavLink>
      <div>
        <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  );
}

export default ActiveUser;
