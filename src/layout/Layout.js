import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { Box, useMediaQuery } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box flexGrow={1} sx={{ marginY: "50px" }} padding="15px">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
