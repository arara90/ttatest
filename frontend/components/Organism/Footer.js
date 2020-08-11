import React from "react";
import styled, {css} from "styled-components";

import Image from "../Atom/Image";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  // border: solid 1px blue;
  height: 100%;
  background-color: transparent;
  
  display: flex;
  flex-direction: row;
  align-items: center;

`;

const buttonCss = css`
//   border: solid 1px red;
  height: 100%;
  flex: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  color: white;
`
const StyledLink = styled.a`
  ${buttonCss}
`
const Button = styled.button`
  ${buttonCss}
`


const Footer = (props) => {
  return (
    <Wrap {...props}> 
      <StyledLink>
        <p>{"이전"}</p>
      </StyledLink>

      <StyledLink>
        <p>{"다음"}</p>
      </StyledLink>
    </Wrap>
  );
};

export default Footer;
