import React from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { Box, CardMedia, Divider, ListItem, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemProductCard } from "../components/Cards/ItemProductCard";
import { NumericFormat } from "react-number-format";

const Empty = () => {
  return (
    <>
      <Typography variant="h6" sx={{ fontSize: 32 }} fontWeight="bold">
        Tu Carrito esta vacio
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        image="https://www.100natural.com/delivery100/web/vistas/img/cartempty.png"
        sx={{ width: "300px", height: "300px", paddingY: "5px" }}
      />
    </>
  );
};

const ProductAdd = ({ productsCart, subTotal }) => {
  return (
    <>
      <Typography variant="h6" sx={{ fontSize: 32 }} fontWeight="bold">
        Tu Carrito
      </Typography>
      <Divider />
      <ListItem sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {productsCart.map((product) => {
          return (
            <Link to={`/product/${product?._id}`} style={{ textDecoration: "none" }}>
              <ItemProductCard product={product} />
            </Link>
          );
        })}
      </ListItem>
      <Divider />
      <Typography variant="h6" sx={{ fontSize: 32, justifyItems: "center" }} fontWeight="bold">
        subTotal : <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={subTotal} />
      </Typography>
    </>
  );
};

export const CartPage = () => {
  const { productsCart, subTotal } = useSelector((state) => state.globalState);
  return (
    <Layout>
      <Commercial />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {productsCart.length === 0 ? <Empty /> : <ProductAdd productsCart={productsCart} subTotal={subTotal} />}
      </Box>
    </Layout>
  );
};
