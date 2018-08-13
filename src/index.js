import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import InitStorage from "./utils/storage";

window.PLF = {
  config: {},
  storage: InitStorage
};

const store = configureStore();

store.runSaga();

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={store.history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}

render();
registerServiceWorker();
