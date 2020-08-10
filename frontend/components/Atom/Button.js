import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Btn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  cursor: pointer;

  text-overflow: ellipsis;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;

  border-radius: 8px;
  background-color: #ffffff;
  line-height: 24px;

  color: #5c5c5c;
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 8px 0 rgba(95, 95, 95, 0.5);

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
