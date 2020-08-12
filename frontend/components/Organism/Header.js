import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import IconLink from "../Molecule/IconLink";
import Image from "../Atom/Image";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.DARKBLUE};
`;

const buttonCss = css`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;
const StyledLink = styled.a`
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
  const { darkMode } = props;

  return (
    <Wrap {...props}>
      <StyledLink>
        <IconLink to="/" icon="home-white.png" width="20px" height="20px" />
      </StyledLink>
      <HeaderTitle>{props.headerTitle}</HeaderTitle>
      <Button>
        <Image icon="moon.png" width="20px" height="20px" />
      </Button>
    </Wrap>
  );
};

const mapStateToProps = (state) => ({
  darkMode: state.status.darkMode,
});

export default connect(mapStateToProps, {})(Header);

Header.propTypes = {
  headerTitle: PropTypes.string,
};

Header.defaultProps = {
  headerTitle: "TTA TESTER",
};
