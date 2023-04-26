import { Grid, ListItem } from "@mui/material";
import React from "react";
import { PrincipalSidebar } from "../Sidebars/PrincipalSidebar";
import { ItemProductCard } from "../Cards/ItemProductCard";
import { Link } from "react-router-dom";

export const RangeProducts = ({ data }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ListItem>
          <PrincipalSidebar />
        </ListItem>
      </Grid>
      <Grid item xs={8}>
        <ListItem sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {data.map((product, index) => {
            return (
              <Link to={`/product/${product?._id}`} style={{ textDecoration: "none" }}>
                <ItemProductCard product={product} />
              </Link>
            );
          })}
        </ListItem>
      </Grid>
    </Grid>
  );
};
