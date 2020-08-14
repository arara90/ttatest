import React from "react";

export default () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return {
    darkMode,
    setDarkMode,
    toggleDarkMode,
  };
};
