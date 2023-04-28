import { Avatar, Box, Button, Container, CssBaseline, Grid, Paper, Typography, createTheme } from "@mui/material";
import { Formik, Form } from "formik";
import React from "react";
import { Inputs } from "../components/Form/Inputs";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { RegisterValidation } from "../components/validation/UserValidation";
import { useDispatch, useSelector } from "react-redux";
import { startSignUp } from "../store/auth/thunks";

export const RegisterPage = () => {
  const theme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.authState);

  React.useEffect(() => {
    if (status === "authenticated") {
      navigate("/");
    }
  }, [status, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "500px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box>
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                phoneNumber: "",
              }}
              onSubmit={(values) => {
                if (
                  values.email === "" ||
                  values.password === "" ||
                  values.name === "" ||
                  values.confirmPassword === ""
                ) {
                  return;
                }
                dispatch(startSignUp(values));
              }}
              validationSchema={RegisterValidation}
            >
              {(formik) => (
                <Form>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography component="h1" variant="h5" fontWeight="bold" sx={{ fontSize: 15 }}>
                        Nombre y Apellidos:*
                      </Typography>
                    </Box>
                    <Inputs label="Nombre y Apellidos" name="name" type="text" placeholder="Nombre" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography component="h1" variant="h5" fontWeight="bold" sx={{ fontSize: 15 }}>
                        Correo electrónico:*
                      </Typography>
                    </Box>
                    <Inputs label="Correo electrónico" name="email" type="text" placeholder="Nombre" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography component="h1" variant="h5" fontWeight="bold" sx={{ fontSize: 15 }}>
                        Password:
                      </Typography>
                    </Box>
                    <Inputs label="Password" name="password" type="password" placeholder="********" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography component="h1" variant="h5" fontWeight="bold" sx={{ fontSize: 15 }}>
                        Confirm Password:
                      </Typography>
                    </Box>
                    <Inputs label="Confirm Password" name="confirmPassword" type="password" placeholder="********" />
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Box sx={{ width: "200px" }}>
                      <Typography component="h1" variant="h5" fontWeight="bold" sx={{ fontSize: 15 }}>
                        Mobile Number:
                      </Typography>
                    </Box>
                    <Inputs label="Number" name="phoneNumber" type="text" placeholder="Number" />
                  </Box>
                  <Typography variant="h5" sx={{ fontSize: 15 }}>
                    Utilizamos este número para mandar mensajes promocional y proporcionar información sobre tus
                    pedidos.{" "}
                  </Typography>
                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link to="/auth/login" variant="body2">
                  Sign in?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
