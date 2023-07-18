import { createSlice } from "@reduxjs/toolkit";
import { getCustomerFromLocalStorage } from "./customerLocalStorage";

const customerSlice = createSlice({
  name: "customerData",
  initialState: {
    customersData: getCustomerFromLocalStorage() || [],
    customerSelected: {},
  },
  reducers: {
    addCustomer: (state, { payload: customer }) => {
      state.customersData.push({...customer, customerSelected: false});
    },
    toggleCustomerSelected: (state, { payload: customerId }) => {
      state.customerSelected[customerId] = !state.customerSelected[customerId];
    },
  },
});

export const { addCustomer, toggleCustomerSelected } = customerSlice.actions;

const selectCustomerDataState = (state) => state.customerData;

export const selectCustomer = (state) =>
selectCustomerDataState(state).customersData.map((customer) => ({
  ...customer,
  customerSelected: state.customerData.customerSelected[customer.id] || false,
}));

export const getCustomerById = ( state, customerId) =>
  selectCustomer(state).find(({ id }) => id === customerId);

export default customerSlice.reducer;
