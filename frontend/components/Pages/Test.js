import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import DefaultTemplate from "../Template/DefaultTemplate";
import LoadingTemplate from "../Template/LoadingTemplate";

import Header from "../Organism/Header";
import Footer from "../Organism/Footer";
import Loading from "../Atom/Loading";
import TestContent from "../Organism/contents/TestContent";

import { recordAnswer } from "../../redux/actions/test";

function Test(props) {
  const numOfStage = 10;
  const {recordAnswer, test} = props;
  const [currQuestion, setCurrQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(numOfStage));



  useEffect(()=>{
    setUserAnswers(userAnswers.fill(null))
  }, [])

  const submitHandler = () => {
    console.log(userAnswers)
    var checkFin = userAnswers.indexOf(null);

    if (checkFin == -1) {
      recordAnswer(userAnswers);
      
    } else {
      alert("풀지 않은 문제가 있습니다.");
      setCurrQuestion(checkFin);
    }
  };

  const renderPage = () => {
    return test.answers != null ? (
      <Redirect to="/result" />
    ) : (
      <DefaultTemplate
        header={<Header headerTitle={(currQuestion+1)+"/"+numOfStage} />}
        footer={
          <Footer
            numOfStage={numOfStage}
            currQuestion={currQuestion}
            clickHandler={setCurrQuestion}
            submitHandler={submitHandler}
          />
        }
      >
        <TestContent
          currQuestion={currQuestion}
          test={props.test}
          selectHandler={setUserAnswers}
          userAnswers={userAnswers}
        />
      </DefaultTemplate>
    );
  };

  const renderLoading = () => {
    return (
      <LoadingTemplate header={<Header />}>
        <Loading />
      </LoadingTemplate>
    );
  };

  return test.isLoaded ? renderPage() : renderLoading();
}

const mapStateToProps = (state) => ({
  test: state.test,
});

export default connect(mapStateToProps, { recordAnswer })(Test);
