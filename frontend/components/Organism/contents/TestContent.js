import React, { useState, useEffect} from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../Atom/Button";
import Paragraph from "../../Atom/Paragraph";
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

const StyledCard = styled(Card)`
`
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


function Test(props) {
  const { year, questions, options } = props.test;
  const { userAnswers, currQuestion, selectHandler } = props;
  const datas = props.data[year];

  const [changeCount, setChangeCount ] = useState(0)   // 버튼 클릭시 userAnswers 배열의 변화 감지 대체용 (JSON.stringify(data)보다 간단한 작업)

  const clickHandler = (e, option) => {
    var newAnswers = userAnswers;

    if(newAnswers[currQuestion] == option) newAnswers[currQuestion] = null;
    else newAnswers[currQuestion] = option;

    selectHandler(newAnswers);
    setChangeCount(prev=>prev+1) //버튼 색깔 변경을 위한 re-render 유도 
  };

  const transformContent = (question) => {
    var content = question.content
    return (content.split(".")[0] + ". "+ content.split(".")[1] + ".").replace(question.title, "[ ? ]")
  }

  const renderOptions = () => {
    var currOptions = options[currQuestion];

    return currOptions.map((option) => {
      return (
        <Li key={option}>
          <Button
            type="button"
            height="100%"
            isSelected = {userAnswers[currQuestion] == option}
            onClick={(e) => clickHandler(e, option)}
          >
            {datas[option].title}
          </Button>
        </Li>
      );
    });
  };
  return (
    <Wrap>
      <Section className="test-question" >
          <StyledCard>{transformContent(datas[questions[currQuestion]])}</StyledCard>
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

export default connect(mapStateToProps, {})(Test);
