import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

export const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const steps = ["Shipping address", "Payment details", "Review your order"];

const theme = createTheme();

export const Checkout = ({ children }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname.substring(1)) {
      case "checkout/ShippingAddress":
        setActiveStep(0);
        return;
      case "checkout/ShippingAddress/paymentsDetails":
        setActiveStep(1);
        return;
      case "checkout/ShippingAddress/paymentsDetails/reviewYourOrders":
        setActiveStep(2);
        return;
      default:
        setActiveStep(0);
    }
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>{children}</>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
