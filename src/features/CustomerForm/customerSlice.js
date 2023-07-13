import { createSlice } from "@reduxjs/toolkit";
import { getCustomerFromLocalStorage } from "./customerLocalStorage";

const customerSlice = createSlice({
  name: "customersData",
  initialState: {
    customersData: getCustomerFromLocalStorage()
  },
  reducers: {
    addCustomer: ({ customersData }, {payload: customer}) => {
      customersData.push(customer)
    }
  }
});

export const { addCustomer } = customerSlice.actions;

const selectCustomersDataState = (state) => state.customersData;

export const selectCustomer = (state) => selectCustomersDataState(state).customersData;


export default customerSlice.reducer;
