import { takeEvery, call, select } from "redux-saga/effects";
import { saveProductsInLocalStorage } from "./productsLocalStorage";
import { selectProducts } from "./productsSlice";

function* saveProductsInLocalStorageHandler() {
  try {
    const products = yield select(selectProducts);
    yield call(saveProductsInLocalStorage, products);
  } catch (error) {
    console.error("Error saving products data to localStorage:", error);
  }
}

export function* productsSaga() {
  yield takeEvery("*", saveProductsInLocalStorageHandler);
}
