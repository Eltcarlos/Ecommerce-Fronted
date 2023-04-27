import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import { Inputs } from "../Form/Inputs";
import { PersonalDetailsValidation } from "../validation/UserValidation";
import { useDispatch } from "react-redux";
import { changePersonalDetails } from "../../store/auth/thunks";

export const PersonalDetails = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
      >
        <Formik
          initialValues={{
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber ? data.phoneNumber : "",
          }}
          onSubmit={(values) => {
            dispatch(changePersonalDetails(values));
          }}
          validationSchema={PersonalDetailsValidation}
        >
          {(formik) => (
            <Form>
              <Typography component="h1" variant="h3" sx={{ paddingY: "10px" }}>
                Personal Details
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Nombre y Apellidos:*
                  </Typography>
                </Box>
                <Inputs label="Nombre" name="name" type="text" placeholder="Nombre" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Correo electrónico:*
                  </Typography>
                </Box>
                <Inputs label="Correo Electronico" name="email" type="email" placeholder="test@gmail.com" disabled />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Mobile Number:
                  </Typography>
                </Box>
                <Inputs label="Opcional" name="phoneNumber" type="number" placeholder="Numero" />
              </Box>

              <Typography component="h1" variant="h5">
                Utilizamos este número para mandar mensajes promocional y proporcionar información sobre tus pedidos.{" "}
              </Typography>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Guardar Cambios
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
