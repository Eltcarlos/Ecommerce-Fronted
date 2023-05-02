import React, { useState } from "react";
import { Checkout } from "../components/Checkout/Checkout";
import { PaymentForm } from "../components/Checkout/PaymentForm";

export const PaymentDetailsPage = ({ setForm, form }) => {
  return (
    <Checkout>
      <PaymentForm setForm={setForm} form={form} />
    </Checkout>
  );
};
