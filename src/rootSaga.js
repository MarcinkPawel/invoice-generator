import { all } from "redux-saga/effects";
import { customerSaga } from "./features/CustomerForm/customerSaga";
import { productsSaga } from "./features/Products/productsSaga";
import { invoiceSaga } from "./features/Invoice/invoiceSaga";

export default function* rootSaga() {
  yield all([
    customerSaga(),
    productsSaga(),
    invoiceSaga()
  ]);
}