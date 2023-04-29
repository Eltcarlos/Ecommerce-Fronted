import { Add, Delete, Remove } from "@mui/icons-material";
import { Box, Button, Card, CardActions, CardMedia, Divider, Drawer, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { clearOneCart, setCartButton } from "../../store";
import { Link } from "react-router-dom";

const MultiActionAreaCard = ({ product }) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(product.count);
  const removeCount = () => {
    setCounter(counter - 1);
    dispatch(setCartButton({ ...product, count: 1, remove: true }));
  };
  const addCount = () => {
    setCounter(counter + 1);
    dispatch(setCartButton({ ...product, count: 1, remove: false }));
  };
  console.log(counter);

  return (
    <Card sx={{ display: "flex", width: "150px", background: "none" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => {
              dispatch(clearOneCart(product._id));
            }}
          >
            <Delete sx={{ fontSize: "25px" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 1,
              border: 1,
            }}
          >
            <IconButton onClick={() => removeCount()} disabled={counter === 1}>
              <Remove />
            </IconButton>
            {counter}
            <IconButton onClick={() => addCount()} disabled={counter === product.amount}>
              <Add />
            </IconButton>
          </Box>
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
        {productsCart.map((product, index) => {
          return <MultiActionAreaCard product={product} key={index} />;
        })}
      </Box>
    </Drawer>
  );
};
