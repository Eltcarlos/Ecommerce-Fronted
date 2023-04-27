import React from "react";
import { LayoutDashBoard } from "../../layout/LayoutDashBoard";
import { Box, Button, Divider, Typography } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";

export const AddressBook = () => {
  return (
    <LayoutDashBoard>
      <Box m="1.5rem 2.5rem">
        <Divider />
        <FlexBetween>
          <Typography fontWeight="bold" variant="h1">
            Libreta de direcciones
          </Typography>
          <Box>
            <Button color="secondary" variant="outlined">
              Mi cuenta
            </Button>
            <Button color="secondary" variant="outlined">
              Cerrar Sesión
            </Button>
          </Box>
        </FlexBetween>
        <Divider />
        <Box sx={{ padding: "2px" }}>
          <Button color="secondary" variant="contained">
            Agregar dirección
          </Button>
        </Box>
      </Box>
    </LayoutDashBoard>
  );
};
