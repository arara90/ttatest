import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 1px blue;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border: solid 1px red;
  z-index: 999;
`;

const Hero = styled.section`
  border: solid 1px green;
`;

const Sponsor = styled.section`
  border: solid 1px blue;
`;

const Content = styled.section`
  border: solid 1px violet;
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
`;

//   max-width: ${size("maxWidth")};
const Footer = styled.footer`
  border: solid 1px black;
  margin-top: auto;
`;

const DefaultTemplate = ({
  header,
  hero,
  sponsor,
  children,
  footer,
  ...props
}) => {
  return (
    <Wrapper {...props} className="DT">
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

DefaultTemplate.defaultProps = {
  header: "header  ",
  hero: "hero    ",
  sponsor: "sponsor ",
  footer: "footer  ",
  children: "children",
};

export default DefaultTemplate;