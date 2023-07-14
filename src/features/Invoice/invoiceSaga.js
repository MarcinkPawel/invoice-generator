import { takeEvery, call, select } from "redux-saga/effects";
import { saveInvoiceInLocalStorage } from "./invoiceLocalStorage";
import { selectInvoice } from "./invoiceSlice";

function* saveInvoiceInLocalStorageHandler() {
  try {
    const invoice = yield select(selectInvoice);
    yield call(saveInvoiceInLocalStorage, invoice);
  } catch (error) {
    console.error("Error saving invoice settings to localStorage:", error);
  }
}

export function* invoiceSaga() {
  yield takeEvery("*", saveInvoiceInLocalStorageHandler);
}
