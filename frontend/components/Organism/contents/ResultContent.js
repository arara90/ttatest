import React from "react";
import styled, { css } from "styled-components";
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
  justify-content: center;
  align-items: center;

`;

const ImageBox = styled.div`
  flex: 1;
  padding: 30px 20px 20px 20px;
`
const StyledImage = styled(Image)`
`;

const ResultBox = styled.div`
  flex: 1;
  width: 100%;


  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  line-height: 24px;

  font-size: 18px;
`;

const Buttons = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 20px;

  // border: solid 1px red;
`;


const StyledButton = styled(Button)``;

const StyledLink = styled.a`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const generateMessage=(score)=>{
  if(score<5){
    return {"message":"조금만 더 힘내세요!", "icon":"wink2.png"}
  }else if(score<8){
    return {"message":"대단합니다!", "icon":"thumb-up.png"}
  }else if(score<10){
    return {"message":" 훌륭합니다!", "icon":"congratulation.svg"}
  }else{
    return {"message":"완벽해요!", "icon":"prize-gold.png"}
  }
}

function ResultContent(props) {

  const {score, numofQuestions} = props;
  const result = generateMessage(score);

  return (
    <Section className="result-content">
      <ImageBox>
      <StyledImage
        icon={result.icon}
        width="100px"
        height="100px"
      />
      </ImageBox>
      <ResultBox>
        <span>
          {score}/{numofQuestions} <br/>
          {score}문제를 맞추셨군요. <br/>
          {result.message}
        </span>
      </ResultBox>
      <Buttons>
        <StyledButton height="40px">틀린 문제 보기</StyledButton>
        <StyledLink href="/">처음으로</StyledLink>
      </Buttons>
    </Section>
  );
}



ResultContent.propTypes = {
  score: PropTypes.number,
};

ResultContent.defaultProps = {
  score: 0,
};

export default ResultContent;
