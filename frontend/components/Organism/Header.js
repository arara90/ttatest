import React from "react";
import styled from "styled-components";

import IconLink from "../Molecule/IconLink";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.DARKBLUE};
`;

//   @media screen and (max-width: 640px) {
//     padding: 0.5rem;
//   }

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

//  max-width: ${size("maxWidth")};
// > :not(:first-child) {
//     margin-left: 1rem;
//   }

const Header = (props) => {
  return (
    <Wrap {...props}>
      <InnerWrapper>
        <IconLink to="/" icon="home-white.png" width="20px" height="20px" />
        {props.children}
        <IconLink to="/" icon="moon.png" width="20px" height="20px" />
      </InnerWrapper>
    </Wrap>
  );
};

export default Header;
