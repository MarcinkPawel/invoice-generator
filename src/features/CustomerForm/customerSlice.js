import { createSlice } from "@reduxjs/toolkit";
import { getCustomerFromLocalStorage } from "./customerLocalStorage";

const customerSlice = createSlice({
  name: "customerData",
  initialState: {
    customersData: getCustomerFromLocalStorage() || [],
  },
  reducers: {
    addCustomer: (state, { payload: customer }) => {
      state.customersData.push(customer);
    },
  },
});

export const { addCustomer } = customerSlice.actions;

const selectCustomerDataState = (state) => state.customerData;

export const selectCustomer = (state) =>
  selectCustomerDataState(state).customersData;

export default customerSlice.reducer;
