import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import Welcome from "./src/Pages/Welcome";

import ActionBar from "./src/Molecule/ActionBar";
import GlobalStyle from "./src/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { dark, light } from "./src/Theme";

const Wrap = styled.div`
  width: 375px;
  height: 667px;

  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.BLUE};
`;

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const theme = darkmode ? dark : light;

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrap>
          <ActionBar themeClickEvent={() => setDarkmode(!darkmode)}></ActionBar>
          {darkmode}
          <Welcome></Welcome>
        </Wrap>
      </ThemeProvider>
    </Fragment>
  );
}

render(<App />, document.querySelector("#root"));
