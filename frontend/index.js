import React, { Fragment, useState } from "react";
import { Route, BrowserRouter  } from "react-router-dom"
import { render } from "react-dom";
import styled, { ThemeProvider } from "styled-components";

//style
import GlobalStyle from "./components/GlobalStyle";
import { dark, light } from "./components/Theme";

//pages
import Main from "./components/Pages/Main";
import Test from "./components/Pages/Test";
import Result from "./components/Pages/Result";
import Upload from "./components/Pages/Upload";

const Wrapper = styled.div`
  min-width : 280px; //galaxy fold
  max-width: 768px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;

  // border: solid 1px red;

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Route exact path="/" component={Upload} /> 
          <Route path="test/" component={Test} /> 
          <Route path="/result" component={Result} /> 
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector("#root"));
