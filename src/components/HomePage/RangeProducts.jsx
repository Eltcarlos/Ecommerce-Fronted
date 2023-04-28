import { Grid, ListItem, Pagination } from "@mui/material";
import React from "react";
import { ItemProductCard } from "../Cards/ItemProductCard";
import { Link } from "react-router-dom";

export const RangeProducts = ({ data, setPage, setPageSize }) => {
  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <ListItem sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {data.map((product, index) => {
            return (
              <Link to={`/product/${product?._id}`} style={{ textDecoration: "none" }}>
                <ItemProductCard product={product} />
              </Link>
            );
          })}
          <Pagination onChange={handleChange} count={10} variant="outlined" shape="rounded" sx={{ paddingY: "20px" }} />
        </ListItem>
      </Grid>
    </Grid>
  );
};
