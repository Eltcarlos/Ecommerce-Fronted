import React from "react";
import Layout from "../layout/Layout";
import { Box, Container, Divider, Typography } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <Layout>
      <Box m="1.5rem 2.5rem">
        <Divider />
        <Typography variant="h1" fontWeight="bold">
          No se puede encontrar la página
        </Typography>
        <Divider />
        <Typography variant="h5">
          O ha sido retirado de esta ubicación o el URL es incorrecto. Hemos registrado este error para ayudarnos a
          mejorar la página web.
        </Typography>
        <Divider />
      </Box>
    </Layout>
  );
};
