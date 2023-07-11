import { takeEvery, call, select } from "redux-saga/effects";
import { saveCustomerInLocalStorage } from "./customerLocalStorage";
import { selectCustomer } from "./customerSlice";

function* saveCustomerInLocalStorageHandler() {
  const customer = yield select(selectCustomer);
  yield call(saveCustomerInLocalStorage, customer);
}


export function* customerSaga() {
  yield takeEvery("*", saveCustomerInLocalStorageHandler)
}
