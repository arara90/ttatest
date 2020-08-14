import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const styles = css`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  cursor: pointer;
  text-overflow: ellipsis;

  font-size:  ${props => props.theme.fontSizes.[props.fontSize]};
  color: ${props => props.theme.colors.[props.color]};

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;

  border-radius: 8px;
  line-height: 1.5em;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 0 8px 0 rgba(95, 95, 95, 0.5);

  &:hover {
    text-decoration: none;
  }

  ${(props) => (props.isSelected ? `
  background-color: ${props.theme.colors.BORA};
  color :${props.theme.colors.WHITE}
  `:`background-color: ${props.theme.colors.WHITE};
  color :${props.theme.colors.FONT}`)
  };
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

function Button({type, ...props}){
  const { to, href, isSelected } = props;
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
  height: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  width :  "100%",
  height: "100%",
  color: "FONT",
  fontSize: "medium"
};
