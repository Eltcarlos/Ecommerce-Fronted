import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";
import { Formik, Form } from "formik";
import { Inputs } from "../Form/Inputs";
import { PasswordDetailsValidation } from "../validation/UserValidation";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { changePassword } from "../../store/auth/thunks";

export const PasswordDetails = ({ data }) => {
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
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            if (values.confirmPassword === "" || values.newPassword === "" || values.oldPassword === "") {
              toast.error("fields not filled");
              return;
            }
            dispatch(changePassword(values));
          }}
          validationSchema={PasswordDetailsValidation}
        >
          {(formik) => (
            <Form>
              <Typography component="h1" variant="h3" sx={{ paddingY: "10px" }}>
                Password Details
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Anterior contraseña:*
                  </Typography>
                </Box>
                <Inputs label="oldPassword" name="oldPassword" type="password" placeholder="********" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Nueva contraseña:
                  </Typography>
                </Box>
                <Inputs label="newPassword" name="newPassword" type="password" placeholder="********" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Confirmar:
                  </Typography>
                </Box>
                <Inputs label="confirmPassword" name="confirmPassword" type="password" placeholder="********" />
              </Box>

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
