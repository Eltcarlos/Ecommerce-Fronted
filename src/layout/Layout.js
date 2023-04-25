import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box flexGrow={1} padding="15px">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
