import React from "react";
import CartIcon from "../Icons/CartIcon";
import { NumericFormat } from "react-number-format";

const Description = ({ onQuant, onAdd, onRemove, onSetOrderedQuant, data }) => {
  const discountedPercentage = Math.round(((data.oldPrice - data.price) / data.price) * 100);

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
        <button
          className="add-to-cart"
          onClick={() => {
            onSetOrderedQuant(onQuant);
          }}
        >
          <CartIcon />
          add to cart
        </button>
      </div>
    </section>
  );
};

export default Description;
