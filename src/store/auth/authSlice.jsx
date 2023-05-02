import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    uid: null,
    name: null,
    img: null,
    addresses: [],
    occupation: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload._id;
      state.name = payload.name;
      state.img = payload.image;
      state.addresses = payload.addresses;
      state.occupation = payload.occupation;
      state.errorMessage = null;
    },
    setAddresses: (state, { payload }) => {
      state.addresses = [...state.addresses, payload];
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.name = null;
      state.addresses = [];
      state.img = null;
      state.errorMessage = payload;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
      state.errorMessage = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, setAddresses } = authSlice.actions;
