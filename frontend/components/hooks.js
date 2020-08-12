import React from "react";

export default () => {
  let [darkMode, setDarkMode] = React.useState(false);
  
  let toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };
};