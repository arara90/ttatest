import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
// import { font, palette } from 'styled-theme'
import { NavLink } from "react-router-dom";

const styles = css`
  text-decoration: none;
  font-weight: 500;

`;

const StyledNavLink = styled(NavLink)`
  ${styles}
`;


const Anchor = styled.a`
  ${styles}
  
  &:link {
    color: ${ props => props.theme.colors.LIGHTFONT};
  }

  &:hover {
    color: ${props => props.theme.colors.LIGHTFONT};
    text-decoration: underline;
  }

  &:visited {
    color: ${props => props.theme.colors.LIGHTFONT};
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
