import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const styles = css`
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

const StyledLink = styled(({ disabled, height, theme, ...props }) => (
  <Link {...props} />
))`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const StyledButton = styled.button`
  ${styles}
`;

const Button = ({ type, ...props }) => {
  const { to, href } = props;
  if (to) {
    return <StyledLink {...props} />;
  }
  if (href) {
    return <Anchor {...props} />;
  }
  return <StyledButton {...props} type={type} />;
};

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  height: 40,
};
