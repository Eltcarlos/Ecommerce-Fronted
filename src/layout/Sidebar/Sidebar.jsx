import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  LocalMall,
  ContactEmergency,
  WhereToVote,
  QuestionMark,
  Chat,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import profileImage from "../../assets/profile.jpeg";

const navItemsUser = [
  {
    text: "Mi cuenta",
    icon: null,
  },
  {
    text: "Inicio de tu cuenta",
    icon: <HomeOutlined />,
    to: "accountHome",
  },
  {
    text: "Sus Pedidos",
    icon: <LocalMall />,
    to: "accountOrderHistory",
  },
  {
    text: "Configuración de la cuenta",
    icon: null,
  },
  {
    text: "Detalles de la cuenta",
    icon: <ContactEmergency />,
    to: "accountSettings",
  },
  {
    text: "Dirección",
    icon: <WhereToVote />,
    to: "addressBook",
  },
  {
    text: "Centro de Contacto de Servicio al Cliente",
    icon: null,
  },
  {
    text: "Contact con nosotros. Ayuda",
    icon: <QuestionMark />,
    to: "help-centre",
  },
  {
    text: "Chat en vivo",
    icon: <Chat />,
    to: "chat",
  },
];

const navItemsAdmin = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({ user, drawerWidth, isSidebarOpen, setIsSidebarOpen, isNonMobile }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  const [nav, setNav] = useState([]);
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  useEffect(() => {
    if (user.role === "user") {
      setNav(navItemsUser);
    } else setNav(navItemsAdmin);
  }, [user]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h5" fontWeight="bold">
                    MY TIENDA ONLINE
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {nav.map(({ text, icon, to }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${to}`);
                        setActive(to);
                      }}
                      sx={{
                        backgroundColor: active === to ? theme.palette.secondary[300] : "transparent",
                        color: active === to ? theme.palette.primary[600] : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color: active === to ? theme.palette.primary[600] : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === to && <ChevronRightOutlined sx={{ ml: "auto" }} />}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100] }}>
                  {user.name}
                </Typography>
                <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
