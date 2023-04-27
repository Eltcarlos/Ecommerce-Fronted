import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useGetClientIDQuery } from "../../store/api/api";

export const AdminPage = () => {
  const { uid } = useSelector((state) => state.authState);
  const token = localStorage.getItem("token");
  const { data } = useGetClientIDQuery(uid, {
    refetchOnMountOrArgChange: true,
  });

  return token ? data.role === "admin" ? <Outlet /> : <Navigate to="/*" /> : <Navigate to="/login" />;
};
