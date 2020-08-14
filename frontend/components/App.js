//react
import React, { useEffect, useState, useContext } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { TTAContext } from "./context";


//style
import GlobalStyle from "./GlobalStyle";
import { dark, light } from "./Theme";

//pages
import Main from "./Pages/Main";
import Test from "./Pages/Test";
import Result from "./Pages/Result";
import Review from "./Pages/Review";
import Upload from "./Pages/Upload";

const Wrapper = styled.div`
  min-width : 280px; //galaxy fold
  max-width: 768px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
`;

function App() {
  const { darkMode } = useContext(TTAContext);
  const theme = darkMode ? dark : light;
  

  return (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <Wrapper>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
          <Route path="/result" component={Result} />
          <Route path="/review" component={Review} />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

