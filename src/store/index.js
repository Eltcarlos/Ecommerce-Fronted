import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    mode: "dark",
    products: [],
    productsCart: [],
  },
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMode } = globalSlice.actions;
