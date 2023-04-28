import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter = () => {
  const { status } = useSelector((state) => state.authState);

  return status === "authenticated" ? <Outlet /> : <Navigate to="/auth/login" />;
};
