import { takeEvery, call, select } from "redux-saga/effects";
import { saveCustomerInLocalStorage } from "./customerLocalStorage";
import { selectCustomer } from "./customerSlice";

function* saveCustomerInLocalStorageHandler() {
  try {
    const customer = yield select(selectCustomer);
    yield call(saveCustomerInLocalStorage, customer);
  } catch (error) {
    console.error("Error saving customer data to localStorage:", error);
  }
}

export function* customerSaga() {
  yield takeEvery("*", saveCustomerInLocalStorageHandler);
}
