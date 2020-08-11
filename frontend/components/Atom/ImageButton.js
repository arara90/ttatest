import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Btn = styled.button`
    background-size: cover;
    background-image: url("https://bucket-simtime.s3.ap-northeast-2.amazonaws.com/static/assets/img/icons/${(props) => props.icon}");
    background-position: center center;
    background-color: transparent;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    cursor: pointer;
`;

function ImageButton(props) {
  return <Btn {...props}></Btn>;
}

export default ImageButton;

ImageButton.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

ImageButton.defaultProps = {
  icon: "forbidden.png",
  width: "14px",
  height: "14px",
};
