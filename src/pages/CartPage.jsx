import React from "react";
import Layout from "../layout/Layout";
import { Commercial } from "../components/HomePage/Commercial";
import { Box, Button, CardMedia, Divider, IconButton, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemProductCard } from "../components/Cards/ItemProductCard";
import { NumericFormat } from "react-number-format";
import { Delete, ShoppingCart } from "@mui/icons-material";
import { clearCart, clearOneCart } from "../store";
import FlexBetween from "../components/FlexBetween";
import { useDataTableCart } from "../hooks/useDataTableCart";
import Table1 from "../components/Tables/Table";

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

const ProductAdd = ({ productsCart, subTotal, dispatch, columns }) => {
  const newProductsTable = [...productsCart, { _id: "", name: "", category: "", count: "SubTotal", price: subTotal }];
  return (
    <>
      <FlexBetween>
        <Typography variant="h6" sx={{ fontSize: 32 }} fontWeight="bold">
          Tu Carrito
        </Typography>
        <IconButton
          color="secondary"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Borrar carrito
          <Delete color="red" style={{ fontSize: 30 }} />
        </IconButton>
      </FlexBetween>
      <Divider />
      <ListItem sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {productsCart.map((product, index) => {
          return (
            <>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Link to={`/product/${product?._id}`} style={{ textDecoration: "none" }} key={index}>
                  <ItemProductCard product={product} key={index} />
                </Link>
                <IconButton
                  onClick={() => {
                    dispatch(clearOneCart(product._id));
                  }}
                >
                  <Delete style={{ fontSize: 30 }} />
                </IconButton>
              </Box>
              <Typography>Cantidad: {product.count}</Typography>
            </>
          );
        })}
      </ListItem>
      <Divider />
      <Box mt="40px" height="300px">
        <Table1 rows={newProductsTable || []} columns={columns} />
      </Box>
      <Link to="/checkout">
        <Button color="secondary" variant="contained" startIcon={<ShoppingCart />}>
          ir al Checkout
        </Button>
      </Link>
    </>
  );
};

export const CartPage = () => {
  const dispatch = useDispatch;
  const { columns } = useDataTableCart();

  const { productsCart, subTotal } = useSelector((state) => state.globalState);
  return (
    <Layout>
      <Commercial />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {productsCart.length === 0 ? (
          <Empty />
        ) : (
          <ProductAdd productsCart={productsCart} subTotal={subTotal} dispatch={dispatch()} columns={columns} />
        )}
      </Box>
    </Layout>
  );
};
