import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import { Provider } from "react-redux";
import store from "./redux/store";
import { TTAContextProvider } from "./components/context";


const MyApp = () => {
    return(
    <Provider store={store}>
      <TTAContextProvider>
          <App />
      </TTAContextProvider>       
    </Provider>
    );
}

ReactDom.render(<MyApp />, document.querySelector("#root"));
