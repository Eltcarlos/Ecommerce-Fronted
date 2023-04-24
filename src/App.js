import { AppBar, Menu, Toolbar } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <AppBar sx={{ position: "static", background: "#4444", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Menu />
      </Toolbar>
    </AppBar>
  );
};
export default App;
