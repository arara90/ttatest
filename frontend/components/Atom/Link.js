import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
// import { font, palette } from 'styled-theme'
import { NavLink } from "react-router-dom";

const styles = css`
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledNavLink = styled(NavLink)`
  ${styles}
`;

const Anchor = styled.a`
  ${styles}
`;

const Link = ({ ...props }) => {
  const { to } = props;

  if (to) {
    return <StyledNavLink {...props} />;
  }
  return <Anchor {...props} />;
};

export default Link;
