import React from "react";
import { Checkout } from "../components/Checkout/Checkout";
import Review from "../components/Checkout/Review";

export const ReviewYourOrderPage = () => {
  return (
    <Checkout>
      <Review />
    </Checkout>
  );
};
