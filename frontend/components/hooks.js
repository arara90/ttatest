import React from "react";

export default () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return {
    darkMode,
    setDarkMode,
    toggleDarkMode,

    modal,
    setModal,
    toggleModal,
  };
};
