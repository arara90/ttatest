import React from "react";
import useTTAContext from "./hooks";
// import ModalPortal from "./Atom/ModalPortal"

var TTAContext;
const { Provider } = (TTAContext = React.createContext());

const TTAContextProvider = ({ children }) => {
  const { darkMode, setDarkMode, toggleDarkMode, modal, setModal,toggleModal} = useTTAContext();

  return (
    <Provider
      value={{
        darkMode,
        setDarkMode,
        toggleDarkMode,

        modal,
        setModal,
        toggleModal,
      }}
    >
        {/* <ModalContextPortal /> */}
      {children}
    </Provider>
  );
};

export { TTAContext, TTAContextProvider };