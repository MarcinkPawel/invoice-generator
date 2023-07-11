import { Provider } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import store from "./store";
import { Main } from "./features/Main";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <Main />
      </div>
    </Provider>
  );
};
