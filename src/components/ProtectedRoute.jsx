import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
