import React, { useState, useEffect} from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../Atom/Button";
import Paragraph from "../../Atom/Paragraph";
 
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

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 13px 0 rgba(43, 43, 43, 0.5);

  flex: 1;
  word-break: break-all;
  
  overflow-y: scroll;
  overflow-x: hidden;

  position: relative;
`;

const StyledParagraph = styled(Paragraph)`
  font-weight: bold;

  position: absolute;
  top:0;
  left:0;
  
  @media screen and (max-width: 640px) {
    padding: 1.2rem;
  }
  @media screen and (min-width: 640px)  {
    padding: 1.5rem;
  }
  
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
    padding-top: 1rem;
    flex-wrap: wrap;
    height: 100%;
    justify-content: space-between;
    align-content: space-around;
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
  const { userAnswers, currQuestion, recordAnswer, selectHandler } = props;
  const datas = props.data[year];

  const [changeCount, setChangeCount ] = useState(0)   // 버튼 클릭시 userAnswers 배열의 변화 감지 대체용 (JSON.stringify(data)보다 간단한 작업)

  const clickHandler = (e, option) => {
    var newAnswers = userAnswers;

    if(newAnswers[currQuestion] == option) newAnswers[currQuestion] = null;
    else newAnswers[currQuestion] = option;

    selectHandler(newAnswers);
    setChangeCount(prev=>prev+1) //버튼 색깔 변경을 위한 re-render 유도 
  };

  const renderOptions = () => {
    var currOptions = options[currQuestion];

    return currOptions.map((option) => {
      return (
        <Li key={option}>
          <Button
            type="button"
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
          <Card >
            <StyledParagraph>{datas[questions[currQuestion]].content}</StyledParagraph>
          </Card>
 
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
