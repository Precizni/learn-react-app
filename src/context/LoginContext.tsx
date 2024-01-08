import { createContext, useContext, useState } from "react";

type ComplexObject = {
  FAKE_USER: {
    name: string;
    email: string;
    password: string;
    avatar: string;
  };
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

type Props = {
  children?: React.ReactNode;
};

const AuthContext = createContext<ComplexObject | null>(null);

const FAKE_USER = {
  name: "Petar",
  email: "petar@gmail.com",
  password: "1234",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(email: string, password: string) {
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
  if (!context) throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
