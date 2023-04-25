import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { globalSlice } from ".";
import { authSlice } from "./auth/authSlice";
import { api } from "./api/api";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  globalState: globalSlice.reducer,
  authState: authSlice.reducer,
  [api.reducerPath]: api.reducer,
});

const persistreducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistreducer,
  middleware: [thunk],
});
