import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../Atom/Button";
import Link from "../../Atom/Link";


import { getTestData } from "../../../redux/actions/test";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  padding-top: 2.5em;
  padding-bottom: 2em;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;

  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  padding-bottom: 20px;
`;

const Ol = styled.ol`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  display: box;
  padding-bottom: 1em;
  list-style: none;
  width: 100%;
  flex: 1;
`;

const StyledButton = styled(Button)`
  min-height: 40px;
`;

const getQuestions = (dataLength, numOfQuestions = 10) => {
  var i = 0;
  var questions = [];

  //1.문제 담기
  while (i < numOfQuestions) {
    questions.push(Math.floor(Math.random() * dataLength));
    if (questions.length == numOfQuestions) {
      var resQ = new Set(questions);
      if (resQ.size < numOfQuestions) {
        //중복제거
        i = resQ.size;
        questions = [...resQ];
      } else break;
    } else {
      i++;
    }
  } //fin while
  return questions;
};

const getOptions = (dataLength, questions = [], numOfOptions = 4) => {
  var i = 0;
  var options = [];
  var optionsItem = [];

  function shuffle(arr) {
    const newArr = arr.slice(); //배열 복사
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  }

  questions.forEach((answer) => {
    optionsItem = [];
    for (var j = 0; j < numOfOptions; j++) {
      //option item 넣기
      if (j == 0) optionsItem.push(answer);
      //정답넣기
      else {
        optionsItem.push(Math.floor(Math.random() * dataLength));
      }

      if (optionsItem.length == numOfOptions) {
        var res = new Set(optionsItem);
        if (res.size < numOfOptions) {
          //중복제거
          j = res.size - 1;
          optionsItem = [...res];
        } else {
          //shuffle
          optionsItem = shuffle(optionsItem);
          options.push(optionsItem);
          break;
        }
      }
    }
  }); //end forEach
  return options;
};

function MainContent(props) {
  const { data, hasLoadedDatas, getTestData } = props;

  const clickHandler = (year) => {
    var questions = [];
    var options = [];
    const numOfQuestions = 10;
    const numOfOptions = 4;

    if (hasLoadedDatas) {
      questions = getQuestions(data[year].length, numOfQuestions);
      options = getOptions(data[year].length, questions, numOfOptions);
    }

    getTestData({year, questions, options, numOfQuestions});
  };

  const renderButtons = () => {
    const buttons = Object.keys(data)
    // buttons.push("all");
    return (
      buttons.reverse().map((button)=>{
        return(
        <Li key={button}>
            <StyledButton
            to="/test"
            className="content-selection"
            onClick={() => clickHandler(button)}
            > 
              {button == "all" ? "전체 랜덤" : button + " 년도"} 
            </StyledButton>
      </Li>
        )
      })
    )
  }


  return (
    <Wrap>
      <Section className="content-title">
        <Title>TTA 정보용어사전</Title>
        <SubTitle>문제를 선택해주세요</SubTitle>
      </Section>
      <Section className="">
        <Ol>
          {renderButtons()}
        </Ol>
      </Section>
    </Wrap>
  );
}

const mapStateToProps = (state) => ({
  data: state.data,
  hasLoadedDatas: state.status,
});

export default connect(mapStateToProps, { getTestData })(MainContent);
