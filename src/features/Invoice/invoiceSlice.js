import { createSlice } from "@reduxjs/toolkit";
import { getInvoiceFromLocalStorage } from "./invoiceLocalStorage";

const invoiceSlice = createSlice({
  name: "invoiceSettings",
  initialState: {
    invoices: getInvoiceFromLocalStorage() || [],
  },
  reducers: {
    addInvoice: (state, { payload: invoice }) => {
      state.invoices.push(invoice);
    },
  },
});

export const { addInvoice } = invoiceSlice.actions;

const selectInvoiceSettingsState = (state) => state.invoices;

export const selectInvoice = (state) =>
  selectInvoiceSettingsState(state).invoices;

export default invoiceSlice.reducer;
