import React from "react";
import styled from "styled-components";

import DefaultTemplate from "../Template/DefaultTemplate";
import Header from "../Organism/Header";
// import Footer from "../Organism/Footer";
import MainContent from "../Organism/contents/MainContent";

function Main() {
  return (
  <DefaultTemplate header={<Header />}>
    <MainContent />
  </DefaultTemplate>
  )
}

export default Main;
