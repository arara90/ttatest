import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider } from "styled-components";

//style
import GlobalStyle from "./components/GlobalStyle";
import { dark, light } from "./components/Theme";

//pages
import Main from "./components/Pages/Main";
import Test from "./components/Pages/Test";
import Result from "./components/Pages/Result";


const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 768px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;

  // @media screen and (min-width: 768px) {
  //   border: solid 1px ${({ theme: { colors } }) => colors.BLUE}
  // };
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
          {/* <Main /> */}
          {/* <Test /> */}
          <Result />
        </Wrapper>
      </ThemeProvider>
    </Fragment>
  );
}

render(<App />, document.querySelector("#root"));
