import React, { useContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Image from "../Atom/Image";
// import { Link } from "react-router-dom";
import Link from "../Atom/Link";

import { TTAContext } from "../context";

const Wrap = styled.div`
  height: 2.5rem;

  @media screen and (min-width: 640px)  {
    height: 3rem;
  }
  
  width: 100%;
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.DARKBLUE};
`;

const buttonCss = css`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const StyledLink = styled(Link)`
  ${buttonCss}
`;
const Button = styled.button`
  ${buttonCss}
`;
const HeaderTitle = styled.div`
  flex: 1;
  margin: auto;

  color: white;
  font-weight: bold;

  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const Header = (props) => {
  const { darkMode, toggleDarkMode } = useContext(TTAContext);
  return (
    <Wrap {...props}>
      <StyledLink href="/">
        <Image icon="home-white.png" width="20px" height="20px" />
      </StyledLink>

      <HeaderTitle>{props.headerTitle}</HeaderTitle>

      <Button onClick={toggleDarkMode}>
        <Image icon="moon.png" width="20px" height="20px" />
      </Button>
    </Wrap>
  );
};

export default Header;

Header.propTypes = {
  headerTitle: PropTypes.string,
};

Header.defaultProps = {
  headerTitle: "TTA TESTER",
};
