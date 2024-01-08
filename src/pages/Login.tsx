import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("petar@gmail.com");
  const [password, setPassword] = useState("1234");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email && password) login(email, password);
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/active-user", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <>
      <div>Login page</div>
      <p>To enter web shop you need to login</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}

export default Login;
