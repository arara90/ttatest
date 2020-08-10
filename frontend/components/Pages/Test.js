import React from "react";
import styled from "styled-components";

import DefaultTemplate from "../Template/DefaultTemplate";
import Header from "../Organism/Header";
import Footer from "../Organism/Footer";
import TestContent from "../Organism/contents/TestContent";

function Test() {
  return (
  <DefaultTemplate header={<Header />} footer={<Footer />}>
    <TestContent />
  </DefaultTemplate>
  )
}

export default Test;
