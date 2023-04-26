import React, { useEffect, useState } from "react";
import {
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ShoppingCart,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

const Navbar = ({ data }) => {
  const { status } = useSelector((state) => state.authState);
  const { productsCart } = useSelector((state) => state.globalState);
  const [bg, setBg] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, [setBg]);

  return (
    <AppBar
      sx={{
        height: "80px",
        position: "fixed",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <Link to="/">
            <Box component="img" alt="logo" src={logo} height="70px" width="120px" sx={{ objectFit: "cover" }} />
          </Link>
        </FlexBetween>
        <FlexBetween>
          <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
          <IconButton>
            <Badge badgeContent={productsCart.length} color="error">
              <ShoppingCart sx={{ fontSize: "25px" }} />
            </Badge>
          </IconButton>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          {status === "authenticated" ? (
            <>
              {" "}
              <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="error">
                  <Notifications sx={{ fontSize: "25px" }} />
                </Badge>
              </IconButton>
              <FlexBetween>
                <Button
                  onClick={handleClick}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textTransform: "none",
                    gap: "1rem",
                  }}
                >
                  <Box
                    component="img"
                    alt="profile"
                    src={data.image}
                    height="32px"
                    width="32px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  <Box textAlign="left">
                    <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                      {/* {data.name} */}
                    </Typography>
                    <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[100] }}>
                      {/* {data.occupation} */}
                    </Typography>
                  </Box>
                  <ArrowDropDownOutlined
                    sx={{
                      color: theme.palette.secondary[300],
                      fontSize: "25px",
                    }}
                  />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={isOpen}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                >
                  <MenuItem onClick={() => dispatch(logout("Cerro Sesion Correctamente"))}>Log Out</MenuItem>
                </Menu>
              </FlexBetween>
            </>
          ) : (
            <IconButton onClick={() => navigate("/auth/login")}>
              <AccountCircle sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
