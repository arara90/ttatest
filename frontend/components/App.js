//react
import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

//redux
import { connect, Provider } from "react-redux";
import store from "../redux/store";
import { getDatas } from "../redux/actions/data";
import { setDarkMode } from "../redux/actions/status";

//style
import GlobalStyle from "./GlobalStyle";
import { dark, light } from "./Theme";

//pages
import Main from "./Pages/Main";
import Test from "./Pages/Test";
import Result from "./Pages/Result";
import Upload from "./Pages/Upload";

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
  //   const { darkMode } = props;
  //   const theme = darkMode ? dark : light;

  useEffect(() => {
    store.dispatch(setDarkMode());
    store.dispatch(getDatas());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Wrapper>
            <Route exact path="/" component={Main} />
            <Route path="test/" component={Test} />
            <Route path="/result" component={Result} />
          </Wrapper>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// const mapStateToProps = (state) => ({
//   darkMode: state.darkMode,
// });

// export default connect(mapStateToProps, { getDatas })(App);
