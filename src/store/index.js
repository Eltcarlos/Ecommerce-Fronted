import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    mode: "light",
    productsCart: [],
    subTotal: null,
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setCart: (state, { payload }) => {
      state.productsCart = [...state.productsCart, payload];
      state.subTotal =
        state.productsCart.length !== 0 &&
        state.productsCart.reduce((previous, current) => {
          return previous + current.price;
        }, 0);
    },
    clearOneCart: (state, { payload }) => {
      state.productsCart = state.productsCart.filter((index) => index._id !== payload);
      state.subTotal = state.productsCart.reduce((previous, current) => {
        return previous + current.price;
      }, 0);
    },
    clearCart: (state) => {
      state.productsCart = [];
      state.subTotal = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setModem, setCart, clearCart, clearOneCart } = globalSlice.actions;
