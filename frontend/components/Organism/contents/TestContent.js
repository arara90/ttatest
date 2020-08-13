import React, { useState } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Button from "../../Atom/Button";
import Image from "../../Atom/Image";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;
  display: flex;
`;

const Quiz = styled.div`
  flex: 1;
`;

const Card = styled.div`
  flex: 1;

  overflow: scroll;
  width: 100%;
  height: 100%;
  word-break: break-all;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 13px 0 rgba(43, 43, 43, 0.5);

  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  padding: 15px;
`;

const Ol = styled.ol`
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  justify-content: flex-start;
  align-items: center;
`;

const Li = styled.li`
  flex: 1;
  list-style: none;
  padding-top: 15px;
  width: 100%;
`;

function Test(props) {
  const { year, questions, options } = props.test;
  const { userAnswers, currQuestion, recordAnswer, selectHandler } = props;

  const datas = props.data[year];

  const clickHandler = (option) => {
    var newAnswers = userAnswers;
    newAnswers[currQuestion] = option;
    selectHandler(newAnswers);
    console.log(newAnswers);
  };

  const renderOptions = () => {
    var currOptions = options[currQuestion];

    return currOptions.map((option) => {
      return (
        <Li key={option}>
          <Button
            className="content-selection"
            onClick={(e) => clickHandler(option)}
          >
            {datas[option].title}
          </Button>
        </Li>
      );
    });
  };
  return (
    <Wrap>
      <Section className="test-question" style={{ position: "relative" }}>
        <Quiz>
          <Card style={{ position: "absolute" }}>
            <p>{datas[questions[currQuestion]].content}</p>
          </Card>
        </Quiz>
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
