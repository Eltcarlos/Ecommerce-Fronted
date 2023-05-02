import React from "react";
import { Checkout } from "../components/Checkout/Checkout";
import { AddressForm } from "../components/Checkout/AddressForm";

export const ShippingAddressPage = ({ setForm, form }) => {
  return (
    <Checkout>
      <AddressForm setForm={setForm} form={form} />
    </Checkout>
  );
};
