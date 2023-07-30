import isTokenExpired from "@/utils/isTokenExpired";
import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface AuthWrapperProps {
  children: ReactElement;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = token && !isTokenExpired(token);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default AuthWrapper;
