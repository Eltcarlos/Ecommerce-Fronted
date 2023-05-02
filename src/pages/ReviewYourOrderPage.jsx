import React from "react";
import { Checkout } from "../components/Checkout/Checkout";
import Review from "../components/Checkout/Review";

export const ReviewYourOrderPage = ({ setForm, form }) => {
  return (
    <Checkout>
      <Review setForm={setForm} form={form} />
    </Checkout>
  );
};
