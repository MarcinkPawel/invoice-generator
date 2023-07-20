import { createSlice } from "@reduxjs/toolkit";
import { getCustomerFromLocalStorage } from "./customerLocalStorage";

const customerSlice = createSlice({
  name: "customerData",
  initialState: {
    customersData: getCustomerFromLocalStorage() || [],
    customerSelected: false,
  },
  reducers: {
    addCustomer: (state, { payload: customer }) => {
      state.customersData.push({ ...customer, customerSelected: false });
    },
    toggleCustomerSelected: (state, { payload: customerId }) => {
      const index = state.customersData.findIndex(
        (customer) => customer.id === customerId
      );
      state.customersData[index].customerSelected =
        !state.customersData[index].customerSelected;
      console.log(customerId);
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

export const getCustomerById = (state, customerId) =>
  state.customerData.customersData.find(
    (customer) => customer.id === customerId
  );

export default customerSlice.reducer;
