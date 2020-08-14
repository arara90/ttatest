import React, {useEffect} from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { getDatas } from "../../redux/actions/data";

import MainTemplate from "../Template/MainTemplate";
import LoadingTemplate from "../Template/LoadingTemplate";

import Header from "../Organism/Header";
import Loading from "../Atom/Loading";

import MainContent from "../Organism/contents/MainContent";

function Main(props) {
  const {hasLoaded, getDatas} = props;

  
  useEffect(() => {
    !hasLoaded && getDatas();
  }, []);
  
  const renderLoading = () => {
    return (
      <LoadingTemplate header={<Header />}>
        <Loading />
      </LoadingTemplate>
    );
  };

  return ( hasLoaded ? (<MainTemplate header={<Header />}> <MainContent /></MainTemplate>) : renderLoading() );
}


const mapStateToProps = (state) => ({
  hasLoaded: state.status.hasLoadedDatas
});

export default connect(mapStateToProps, {getDatas})(Main);

