import React from "react";
import styled, {css} from "styled-components";
import PropTypes from "prop-types";

import Button from "../../Atom/Button";
import Image from "../../Atom/Image";


const Section = styled.section`
  background-color: white;
  width: 70%;
  height: 380px;
  border-radius: 8px;
  background-color: #ffffff;  

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 20px;

  // border: solid 1px #979797;
`;

const StyledImage = styled(Image)`
  flex: 1;

`

const ResultBox = styled.div`
  flex: 1;
  width: 100%;
  padding : 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  line-height: 24px;

  font-size: 18px;

  // border: solid 1px blue;
`

const Buttons = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding:20px;

  // border: solid 1px red;
`

  // width: 40px;
  // height: 40px;
// const buttonCss = css`
//   display: flex;
//   width: 100%;

//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: transparent;
// `

const StyledButton = styled(Button)`

`

const StyledLink = styled.a`

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`

function ResultContent(props) {
  const {score} = props;
    return (
      <Section className="result-content">
        <StyledImage icon="congratulation.svg" width="100px" height="100px"></StyledImage>
        <ResultBox>
          <span>
            대단합니다.<br/>
            {score}문제를 맞추셨군요. <br/>
            {score}/{20}
          </span>
            </ResultBox>
        <Buttons >
          <StyledButton height="40px">틀린 문제 보기</StyledButton>
          <StyledLink>처음으로</StyledLink>
        </Buttons>
      </Section>
    )
}

ResultContent.propTypes = {
  score: PropTypes.number,
  
};

ResultContent.defaultProps = {
  score: 0,

};

export default ResultContent
