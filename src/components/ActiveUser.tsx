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
    <div className="flex flex-col items-center space-y-6">
      <div className="mb-7 mt-10 text-4xl font-bold">
        Welcome {FAKE_USER.name}.{' '}
      </div>
      <NavLink
        to="../web-shop"
        relative="path"
        className="w-80 rounded-md p-2 text-center text-xl font-semibold outline outline-2 outline-offset-1 outline-black hover:bg-amber-300"
      >
        Go to The Shop
      </NavLink>
      <div>
        <button
          className="flex w-80 justify-center rounded-md bg-stone-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-30"
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ActiveUser;
