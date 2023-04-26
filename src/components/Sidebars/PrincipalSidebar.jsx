import { Box, Card, Typography, Slider } from "@mui/material";
import React from "react";

export const PrincipalSidebar = () => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", width: "230px", padding: "5px" }}>
      <Typography variant="h3">Filtros</Typography>
      <Typography variant="h6" fontWeight="bold">
        Rango de Precios
      </Typography>
      <Box sx={{ paddingX: "20px" }}>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={0}
          valueLabelDisplay="auto"
          getAriaValueText={0}
          disableSwap
          sx={{ color: "blue" }}
        />
      </Box>
      <Typography variant="h3" fontWeight="bold">
        Categorias
      </Typography>
    </Card>
  );
};
