import React from "react";

import { LayoutDashBoard } from "../../layout/LayoutDashBoard";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { Inputs } from "../../components/Form/Inputs";
import { AddressValidation } from "../validation/UserValidation";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { newAddress } from "../../store/auth/thunks";
import { v4 as uuidv4 } from "uuid";
import { setAddresses } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const NewAddress = ({ setAdd }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = localStorage.getItem("path-addressBook");
  console.log(path);
  return (
    <LayoutDashBoard>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Formik
          initialValues={{
            id: uuidv4(),
            nameAddress: "",
            country: "",
            state: "",
            city: "",
            postalCode: "",
            address: "",
            location: "",
            phoneNumber: "",
          }}
          onSubmit={(values) => {
            if (
              values.nameAddress === "" ||
              values.country === "" ||
              values.state === "" ||
              values.city === "" ||
              values.postalCode === "" ||
              values.address === "" ||
              values.location === "" ||
              values.phoneNumber === ""
            ) {
              toast.error("fields not filled");
              return;
            }
            dispatch(newAddress(values));
            dispatch(setAddresses(values));
            setAdd(false);
            if (path !== null) {
              navigate(`/${path}`);
            } else {
              window.location.reload();
            }

            localStorage.removeItem("path-addressBook");
          }}
          validationSchema={AddressValidation}
        >
          {(formik) => (
            <Form>
              <Typography component="h1" variant="h3">
                Nueva Direccion
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Nombre de la Direccion:
                  </Typography>
                </Box>
                <Inputs
                  label="nombre de la direccion"
                  name="nameAddress"
                  type="text"
                  placeholder="nombre de la direccion"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Pais:
                  </Typography>
                </Box>
                <Inputs label="Pais" name="country" type="text" placeholder="Pais" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Estado:
                  </Typography>
                </Box>
                <Inputs label="Estado" name="state" type="text" placeholder="Estado" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Ciudad:
                  </Typography>
                </Box>
                <Inputs label="Ciudad" name="city" type="text" placeholder="Ciudad" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Direccion:
                  </Typography>
                </Box>
                <Inputs label="Direccion " name="address" type="text" placeholder="Direccion" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Localidad:
                  </Typography>
                </Box>
                <Inputs label="Localidad" name="location" type="text" placeholder="Localidad" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Codigo Postal:
                  </Typography>
                </Box>
                <Inputs label="Codigo Postal" name="postalCode" type="text" placeholder="Codigo Postal" />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography component="h1" variant="h5" fontWeight="bold">
                    Numero:
                  </Typography>
                </Box>
                <Inputs label="Numero celular" name="phoneNumber" type="text" placeholder="Numero celular" />
              </Box>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Guardar Cambios
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </LayoutDashBoard>
  );
};
