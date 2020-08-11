import React from "react";
import styled from "styled-components";

import MainTemplate from "../Template/MainTemplate";
import Header from "../Organism/Header";
// import Footer from "../Organism/Footer";
import MainContent from "../Organism/contents/MainContent";

function Main() {
  return (
  <MainTemplate header={<Header />}>
    <MainContent />
  </MainTemplate>
  )
}

export default Main;
