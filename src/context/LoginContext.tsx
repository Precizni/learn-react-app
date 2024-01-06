import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const FAKE_USER = {
  name: "Petar",
  email: "petar@gmail.com",
  password: "1234",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      setIsAuthenticated(true);
    return;
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ FAKE_USER, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
