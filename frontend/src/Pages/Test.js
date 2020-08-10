import React from "react";
import styled from "styled-components";

import DefaultTemplate from "../Template/DefaultTemplate";
import Header from "../Organism/Header";
// import ActionBar from "../Molecule/ActionBar";

function Test() {
  return <DefaultTemplate header={<Header />}></DefaultTemplate>;
}

export default Test;
