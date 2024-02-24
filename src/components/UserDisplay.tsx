import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/LoginContext';

function UserDisplay() {
  const { FAKE_USER, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // function handleClick() {
  //   logout();
  //   navigate('/');
  // }
  function handleClick() {
    const text = 'Do you want to logout?';
    if (confirm(text) == true) {
      logout();
      navigate('/');
    }
  }

  return isAuthenticated ? (
    <div className="m-2 inline-block">
      <img
        onClick={handleClick}
        src={FAKE_USER.avatar}
        alt={FAKE_USER.name}
        className="size-16 cursor-pointer rounded-full hover:opacity-50"
      />
      {/* <span>{FAKE_USER.name}</span> */}
      {/* <button onClick={handleClick}>Logout</button> */}
    </div>
  ) : null;
}

export default UserDisplay;
