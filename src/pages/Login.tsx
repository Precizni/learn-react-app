import { FormEvent, useEffect, useState } from 'react';
import { useAuth } from '../context/LoginContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('petar@gmail.com');
  const [password, setPassword] = useState('1234');

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate('/active-user', { replace: true });
    },
    [isAuthenticated, navigate],
  );

  return (
    <div className="my-16 flex flex-col items-center">
      <h2 className="mb-10 text-center text-4xl font-bold">Login and enter</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="p-1 text-sm">
            Email address
          </label>
          <div className="mt-2">
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-80 rounded-md border-2 p-1 shadow-md focus:outline-stone-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="p-1 text-sm">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-80 rounded-md border-2 p-1 shadow-md focus:outline-stone-500"
            />
          </div>
        </div>

        <div>
          <button className="flex w-full justify-center rounded-md bg-stone-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-amber-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
