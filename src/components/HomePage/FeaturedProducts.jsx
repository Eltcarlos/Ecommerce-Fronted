import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ItemCard } from "../Cards/ItemCard";

export const FeaturedProducts = () => {
  return (
    <Box>
      <Typography variant="h5" component="div" paddingBottom="10px">
        Productos Destacados
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={2} key={index}>
            <ItemCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
