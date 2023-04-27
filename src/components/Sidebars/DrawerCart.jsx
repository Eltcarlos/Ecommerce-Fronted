import { useTheme } from "@emotion/react";
import { Delete } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardMedia, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { clearOneCart } from "../../store";
import { Link } from "react-router-dom";

const MultiActionAreaCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ display: "flex", width: "150px", background: "none" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
        <Box>
          <CardMedia
            component="img"
            image={product.img}
            sx={{ width: "140px", height: "70px", objectFit: "contain", paddingY: "5px" }}
          />
        </Box>
        <Typography variant="h5" component="div" fontWeight="bold">
          <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={product.price} />
        </Typography>
        <CardActions>
          <select name="lenguajes" id="lang">
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="golang">Golang</option>
            <option value="python">Python</option>
            <option value="c#">C#</option>
            <option value="C++">C++</option>
            <option value="erlang">Erlang</option>
          </select>
          <IconButton
            onClick={() => {
              dispatch(clearOneCart(product._id));
            }}
          >
            <Delete sx={{ fontSize: "25px" }} />
          </IconButton>
        </CardActions>
      </Box>
      <Divider />
    </Card>
  );
};

export const DrawerCart = ({ showCart, setShowCart }) => {
  const { productsCart, subTotal } = useSelector((state) => state.globalState);

  useEffect(() => {
    if (subTotal === 0) {
      setShowCart(false);
    }
  }, [subTotal, setShowCart]);

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 150,
          background: "white",
          borderRadius: 0,
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center", justifyContent: "center" }}>
        <Typography variant="h5" sx={{ textAlign: "center", fontSize: 12 }}>
          subTotal:
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ textAlign: "center", fontSize: 12 }}
          fontWeight="bold"
          color="red"
        >
          <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={subTotal} />
        </Typography>
        <Box sx={{ padding: "2px" }}>
          <Link to="/cart">
            <Button color="secondary" variant="contained">
              <Typography variant="h5" sx={{ textAlign: "center", fontSize: 12 }}>
                Ir al Carrito
              </Typography>
            </Button>
          </Link>
        </Box>
        <Divider />
        {productsCart.map((product) => {
          return <MultiActionAreaCard product={product} />;
        })}
      </Box>
    </Drawer>
  );
};
