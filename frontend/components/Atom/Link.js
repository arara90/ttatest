import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
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

// const StyledLink = styled(Link)`
//   ${styles}
// `;


const Anchor = styled.a`
  ${styles}
  
  &:link {
    color: ${ props => props.theme.colors.FONT};
  }

  &:hover {
    color: ${props => props.theme.colors.FONT};
  }

  &:visited {
    color: ${props => props.theme.colors.FONTLIGHT};d
  }
`;

const Link = (props) => {
  const { to, href } = props;

  if (to) {
    return <StyledNavLink {...props} />;
  }else{
    return <Anchor {...props} />;
  }

};

export default Link;
