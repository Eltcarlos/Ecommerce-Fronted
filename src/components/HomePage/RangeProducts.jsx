import { Grid, ListItem } from "@mui/material";
import React from "react";
import { PrincipalSidebar } from "../Sidebars/PrincipalSidebar";
import { ItemProductCard } from "../Cards/ItemProductCard";

export const RangeProducts = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <ListItem>
          <PrincipalSidebar />
        </ListItem>
      </Grid>
      <Grid item xs={8}>
        <ListItem sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <ItemProductCard />
          <ItemProductCard />
        </ListItem>
      </Grid>
    </Grid>
  );
};
