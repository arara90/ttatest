import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import MainTemplate from "../Template/MainTemplate";
import Header from "../Organism/Header";
// import Footer from "../Organism/Footer";
import MainContent from "../Organism/contents/MainContent";

function Main() {
  return (
    <MainTemplate header={<Header />}>
      <MainContent />
    </MainTemplate>
  );
}

const mapStateToProps = (state) => ({
  darkMode: state.darkMode,
});

export default connect(mapStateToProps, {})(Main);
