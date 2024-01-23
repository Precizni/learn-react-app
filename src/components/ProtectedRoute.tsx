import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/LoginContext";
import { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

function ProtectedRoute({ children }: Props) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
