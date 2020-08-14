import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

//context
import { TTAContext } from "../context";

//redux-dispatch
import {resetTest} from "../../redux/actions/test"

//conponents
import DefaultTemplate from "../Template/DefaultTemplate";
import ModalTemplate from "../Template/ModalTemplate";
import ReviewContent from "../Organism/contents/ReviewContent";
import ReviewModalContent from "../Organism/contents/ReviewModalContent";
import Header from "../Organism/Header";
import Footer from "../Organism/Footer";
import Button from "../Atom/Button";


const StyledButton = styled(Button)`
  background-color: ${({ theme: { colors } }) => colors.DARKBLUE};
  color: ${({ theme: { colors } }) => colors.WHITE};

`

function Review(props) {
  const {data, test } = props;
  const {modal, toggleModal} = useContext(TTAContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedItem, setSelectedItem] = useState({title:"", content:""});
  const [fin, setFin] = useState(false);

  useEffect(()=>{
    fin && props.resetTest();
  }, [fin])

  const submitHandler = () => {
    alert("처음으로 돌아갑니다.")
    setFin(true);
  };


  
  const clickHandler = (option) => {
    console.log(option)
    var datas = data[test.year];
    setSelectedItem({title:datas[option].title, content:datas[option].content} );
    toggleModal();
  };



  return  fin ? <Redirect to="/" /> : (
    <DefaultTemplate
    header={<Header headerTitle={(currQuestion+1)+"/" + props.test.numOfQuestions} />}
    footer={
      <Footer
        numOfQuestions={props.test.numOfQuestions}
        currQuestion={currQuestion}
        clickHandler={setCurrQuestion}
        submitHandler={submitHandler}
      />
    }
  >
    <ReviewContent
      currQuestion={currQuestion}
      test={props.test}
      data={props.data}
      clickHandler={clickHandler}
    />
     {modal && <ModalTemplate 
                  toggleModal={toggleModal} 
                  children={<ReviewModalContent content={selectedItem} >hello</ReviewModalContent>}
                  buttons={<StyledButton height="2em" onClick={toggleModal}>확인</StyledButton>}
                  width="75%" height="70%"
                  />}
  </DefaultTemplate>
  )
}

const mapStateToProps = (state) => ({
  test: state.test,
  data: state.data
});

export default connect(mapStateToProps, {resetTest})(Review);