import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import EmptyTemplate from "../Template/EmptyTemplate";
import ResultContent from "../Organism/contents/ResultContent";

function Result(props){
  var [score, setScore] = useState(0);
  var {questions, answers} = props.test;

  useEffect(()=>{
    var resultArray = [];
    var correct = 0;

    for(var i=0 ; i<questions.length ; i++){
      if(questions[i] == answers[i]){
        resultArray.push(1);
        correct++;
      }else{
        resultArray.push(0);
      }
    }

    setScore(correct)

  }, [])
  
  return (
    <EmptyTemplate>
      <ResultContent score={score} numOfQuestions={questions.length}/>
    </EmptyTemplate>
  );
}

const mapStateToProps = (state) => ({
  test: state.test,
});

export default connect(mapStateToProps, { })(Result);
