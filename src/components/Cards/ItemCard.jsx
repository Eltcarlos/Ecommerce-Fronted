import { ShoppingCart } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

export const ItemCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/product/${product?._id}`}>
        <CardMedia component="img" alt="product" height="140" image={product.img} />
      </Link>
      <Divider />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={product.price} />
        </Typography>
        <Typography variant="body2" color="green">
          Envión gratis
        </Typography>
        <Box sx={{ padding: "2px" }}>
          <Button color="secondary" variant="contained" startIcon={<ShoppingCart />}>
            Agregar al carrito
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
