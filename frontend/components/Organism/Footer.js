import React from "react";
import styled, { css } from "styled-components";

import Image from "../Atom/Image";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  border-top: solid 1px ${({ theme: { colors } }) => colors.WHITE};
  height: 100%;
  background-color: transparent;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const buttonCss = css`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  color: white;
`;
const StyledLink = styled.a`
  ${buttonCss}
`;
const Button = styled.button`
  ${buttonCss}
`;

const Footer = (props) => {
  const { numOfStage, currQuestion, clickHandler, submitHandler } = props;

  const prevClickHandler = () => {
    if (currQuestion > 0) clickHandler((prev) => prev - 1);
  };

  const nextClickHandler = () => {
    if (currQuestion < numOfStage - 1) clickHandler((prev) => prev + 1);
    else if (currQuestion == numOfStage - 1) submitHandler();
  };

  return (
    <Wrap {...props}>
      <Button onClick={prevClickHandler}>
        <p>{"이전"}</p>
      </Button>

      <Button onClick={nextClickHandler}>
        <p>{currQuestion == numOfStage - 1 ? "제출" : "다음"}</p>
      </Button>
    </Wrap>
  );
};

export default Footer;
