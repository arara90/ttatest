import React from "react";
import useTTAContext from "./hooks";
// import ModalContextPortal from "../AtomicComponents/A-Atomics/Modal/ModalPortal";

let TTAContext;
let { Provider } = (TTAContext = React.createContext());

let TTAContextProvider = ({ children }) => {
  let { darkMode, setDarkMode, toggleDarkMode} = useTTAContext();

  return (
    <Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,
      }}
    >
        {/* <ModalContextPortal /> */}
      {children}
    </Provider>
  );
};

export { TTAContext, TTAContextProvider };