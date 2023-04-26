import React from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch } from "react-redux";
import { setCart } from "../../store";
import { Button } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Description = ({ data }) => {
  const discountedPercentage = Math.round(((data.oldPrice - data.price) / data.price) * 100);
  const dispatch = useDispatch();

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
        <Button
          onClick={() => {
            dispatch(setCart(data));
          }}
          color="secondary"
          variant="contained"
          startIcon={<ShoppingCart />}
        >
          Agregar al carrito
        </Button>
      </div>
    </section>
  );
};

export default Description;
