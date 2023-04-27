import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useGetClientIDQuery } from "../store/api/api";

export const LayoutDashBoard = ({ children }) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { uid } = useSelector((state) => state.authState);
  const { data } = useGetClientIDQuery(uid);
  return (
    <>
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
        <Sidebar
          user={data || {}}
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} menu />
        <Box flexGrow={1} sx={{ marginY: "50px" }} padding="15px">
          {children}
        </Box>
      </Box>
    </>
  );
};
