import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider } from "styled-components";

//style
import GlobalStyle from "./components/GlobalStyle";
import { dark, light } from "./components/Theme";

//pages
import Test from "./components/Pages/Test";

const Wrapper = styled.div`
  border: solid 1px black;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// @media screen and (max-width: 640px) {
//   padding-top: 3.25rem;
// }

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const theme = darkmode ? dark : light;

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Test />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

render(<App />, document.querySelector("#root"));
