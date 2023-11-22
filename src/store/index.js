import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slice/productsSlice";
import categoryReducer from "./slice/categorySlice";
import cartReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});
