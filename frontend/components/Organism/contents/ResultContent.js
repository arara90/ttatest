import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Button from "../../Atom/Button";
import Image from "../../Atom/Image";
import Paragraph from "../../Atom/Paragraph"
import Link from "../../Atom/Link";

const Section = styled.section`
  background-color: white;
  width: 70%;
  height: 450px;
  border-radius: 8px;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  flex: 1;
  padding: 2rem;
`
const StyledImage = styled(Image)`
`;

const ResultBox = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Buttons = styled.div`
  flex: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  padding: 1.5rem;
`;


const StyledButton = styled(Button)`
  background-color: ${props=>props.theme.colors.DARKBLUE};
  color: ${props=>props.theme.colors.WHITE};
`;

const StyledLink = styled(Link)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const ScoreParagraph = styled(Paragraph)`
  color : ${props=>props.theme.colors.[props.color]};
  font-weight: bold;
`;

const Message = styled(Paragraph)`
  color : ${props=>props.theme.colors.FONT};
  line-height: 2em;
  font-weight: bold;
  text-align: center;
`;

const generateMessage=(score)=>{
  if(score<6){
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

  const {score, numOfQuestions} = props;
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
        <ScoreParagraph color="DARKBLUE" fontSize="medium">
          {score}/{numOfQuestions} <br/>
        </ScoreParagraph>
        <Message>
          {score}문제를 맞추셨군요. <br/>
          {result.message}
        </Message>
      </ResultBox>
      <Buttons>
        <StyledButton to="/review" height="3rem">문제 다시 보기</StyledButton>
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
