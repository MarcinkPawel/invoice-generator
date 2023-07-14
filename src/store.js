import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import customerReducer from "./features/CustomerForm/customerSlice";
import productsReducer from "./features/Products/productsSlice";
import invoiceReducer from "./features/Invoice/invoiceSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    customerData: customerReducer,
    productsData: productsReducer,
    invoices: invoiceReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;