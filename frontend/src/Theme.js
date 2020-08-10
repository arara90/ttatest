import React from "react";
import { ThemeProvider } from "styled-components";

//https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h

export const light = {
  colors: {
    WHITE: "#FFFFFF",
    BLUE: "#78b0ed",
    DARKBLUE: "#0091ff",
    BORA: "#7872f7",
    FONT: "#5c5c5c",
    LIGHTFONT: "#7c7c7c",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

export const dark = {
  colors: {
    WHITE: "#d8d8d8",
    BLUE: "#5a5a5a",
    DARKBLUE: "#000000",
    BORA: "#6d7278",
    FONT: "#5c5c5c",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};
