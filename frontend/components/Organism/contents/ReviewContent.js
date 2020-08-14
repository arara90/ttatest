import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../Atom/Button";
import Card from "../../Molecule/Card"; 

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;
  display: flex;
  max-height: 50%;
`;

const StyledCard = styled(Card)``

const Ol = styled.ol`
  flex: 1;
  display: flex;

  @media screen and (max-width: 640px)  {
    padding-top: 0.5rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media screen and (min-width: 640px)  {
    padding-top: 1.5rem;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
  }
`;

const Li = styled.li`
  list-style: none;

  @media screen and (max-width: 640px)  {
    flex: 1;
    padding-top: 0.6rem;
    width: 100%;
  }

  @media screen and (min-width: 640px)  {
    width: 48%;
    height: 45%;
  }
`;

const StyledButton = styled(Button)`
  ${props => props.isCorrect ? `
    background-color: ${props.theme.colors.YELLOW};
    color: ${props.theme.colors.WHITE};` : null}
`

function ReviewContent(props) {
  const { year, questions, answers, options } = props.test;
  const { currQuestion, clickHandler } = props;
  const datas = props.data[year];

  const renderOptions = () => {
    var currOptions = options[currQuestion];

    return currOptions.map((option) => {
      return (
        <Li key={option}>
          <StyledButton
            type="button"
            isSelected = {answers[currQuestion] == option} //선택한 답변
            isCorrect = {questions[currQuestion] == option} //정답
            onClick={(e) => clickHandler(option)}
          >
            {datas[option].title}
          </StyledButton>
        </Li>
      );
    });
  };
  return (
    <Wrap>
      <Section className="test-question" >
        <StyledCard>{datas[questions[currQuestion]].content}</StyledCard>
      </Section>
      <Section className="test-options">
        <Ol>{renderOptions()}</Ol>
      </Section>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, {})(ReviewContent);
