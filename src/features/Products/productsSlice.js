import { createSlice } from "@reduxjs/toolkit";
import { getProductsFromLocalStorage } from "./productsLocalStorage";

const productsSlice = createSlice({
  name: "productsData",
  initialState: {
    products: getProductsFromLocalStorage() || {},
  },
  reducers: {
    addProduct: (state, { payload: product }) => {
      state.products.push(product);
    },
  },
});

export const { addProduct } = productsSlice.actions;

const selectProductsState = (state) => state.productsData;

export const selectProducts = (state) => selectProductsState(state).products;

export default productsSlice.reducer;
