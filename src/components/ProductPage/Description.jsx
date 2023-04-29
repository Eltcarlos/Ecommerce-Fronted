import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../store";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Add, DataArray, Remove, ShoppingCart } from "@mui/icons-material";

const Description = ({ data }) => {
  const discountedPercentage = Math.round(((data.oldPrice - data.price) / data.price) * 100);
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const { productsCart } = useSelector((index) => index.globalState);
  const products = productsCart.find((item) => item._id === data._id);
  return (
    <section className="description">
      <h1>{data.name}</h1>
      <p className="desc">{data.description}</p>
      <div className="price">
        <div className="main-tag">
          <p>
            <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={data.price} />
          </p>
          {data.oldPrice && <p>{discountedPercentage}%</p>}
        </div>
        <s>
          {" "}
          <NumericFormat prefix="$" displayType="text" thousandSeparator="," value={data.oldPrice} />
        </s>
      </div>
      <div className="buttons">
        {data.amount === products?.count ? (
          <Typography>Ya tienes todos los productos</Typography>
        ) : (
          <>
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
              <IconButton onClick={() => setCounter((prev) => (prev === 1 ? 1 : prev - 1))} disabled={counter === 1}>
                <Remove />
              </IconButton>
              {counter}
              <IconButton onClick={() => setCounter((prev) => prev + 1)} disabled={counter === data.amount}>
                <Add />
              </IconButton>
            </Box>
            <Button
              onClick={() => {
                dispatch(setCart({ ...data, count: counter }));
              }}
              color="secondary"
              variant="contained"
              startIcon={<ShoppingCart />}
            >
              Agregar al carrito
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Description;
