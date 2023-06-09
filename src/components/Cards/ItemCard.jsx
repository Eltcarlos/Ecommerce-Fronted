import { InstallDesktopRounded, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import React from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store";

export const ItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const { productsCart } = useSelector((index) => index.globalState);
  const products = productsCart.find((item) => item._id === product._id);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/product/${product?._id}`}>
        <CardMedia component="img" alt="product" height="140" image={product.img} sx={{ padding: "10px" }} />
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
          {product.amount === products?.count ? (
            <Typography>Ya tienes todos los productos</Typography>
          ) : (
            <Button
              onClick={() => {
                dispatch(setCart({ ...product, count: 1 }));
              }}
              color="secondary"
              variant="contained"
              startIcon={<ShoppingCart />}
            >
              Agregar al carrito
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
