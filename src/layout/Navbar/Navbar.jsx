import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  ShoppingCart,
  AccountCircle,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { useDispatch, useSelector } from "react-redux";
import profileImage from "../../assets/profile.jpeg";
import logo from "../../assets/logo.png";

import {
  AppBar,
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
import { setMode } from "../../store";
import { useGetUserQuery } from "../../store/api/api";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, uid } = useSelector((state) => state.authState);
  // const { data } = useGetUserQuery(uid);
  // console.log(data);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <Box component="img" alt="logo" src={logo} height="70px" width="120px" sx={{ objectFit: "cover" }} />
        </FlexBetween>
        <FlexBetween>
          <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
          <Box position="relative" height="100%" width="50%">
            <ShoppingCart backgroundColor={theme.palette.background.alt} sx={{ paddingLeft: 2 }} />
            <Box
              backgroundColor="red"
              borderRadius="100%"
              position="absolute"
              top="-10px"
              left="22px"
              sx={{ width: "18px", height: "18px", display: "flex", justifyContent: "center" }}
            >
              <Typography
                sx={{
                  color: "white",
                }}
                fontWeight="bold"
                fontSize="0.75rem"
              >
                1
              </Typography>
            </Box>
          </Box>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          {status === "authenticated" ? (
            <>
              {" "}
              <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px" }} />
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
                    src={profileImage}
                    height="32px"
                    width="32px"
                    borderRadius="50%"
                    sx={{ objectFit: "cover" }}
                  />
                  <Box textAlign="left">
                    <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
                      carlos
                    </Typography>
                    <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[100] }}>
                      admin
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
