import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  cursor: pointer;

  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  border: solid 1px red;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px 20px 10px 20px;
  line-height: 24px;

  color: #5c5c5c;
  background-color: #ffffff;

  &.selected {
    color: #ffffff;
    background-color: ${({ theme: { colors } }) => colors.BORA};
  }
`;

function Button(props) {
  return <Btn {...props}></Btn>;
}

export default Button;

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

Button.defaultProps = {
  width: "100%",
  height: "100%",
};
