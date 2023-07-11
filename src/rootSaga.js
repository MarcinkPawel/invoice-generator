import { all } from "redux-saga/effects";
import { customerSaga } from "./features/CustomerForm/customerSaga";

export default function* rootSaga() {
  yield all([customerSaga()]);
}