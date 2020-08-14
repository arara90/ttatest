import React from "react";
import styled, { css } from "styled-components";


const Wrap = styled.div`
  border-top: solid 1px ${({ theme: { colors } }) => colors.WHITE};

  height: 3rem;
  @media screen and (min-width: 640px)  {
    height: 3.5rem;
  }

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

  color: ${({ theme: { colors } }) => colors.WHITE};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.small};
  font-weight: bold;

  cursor: pointer;
  
`;

const Button = styled.button`
  ${buttonCss}
`;

const Footer = (props) => {
  const { numOfQuestions, currQuestion, clickHandler, submitHandler } = props;

  const prevClickHandler = () => {
    if (currQuestion > 0) clickHandler((prev) => prev - 1);
  };

  const nextClickHandler = () => {
    if (currQuestion < numOfQuestions - 1) clickHandler((prev) => prev + 1);
    else if (currQuestion == numOfQuestions - 1) submitHandler();
  };

  return (
    <Wrap {...props}>
      <Button onClick={prevClickHandler}>
        <p>{"이전"}</p>
      </Button>

      <Button onClick={nextClickHandler}>
        <p>{currQuestion == numOfQuestions - 1 ? "완료" : "다음"}</p>
      </Button>
    </Wrap>
  );
};

export default Footer;
