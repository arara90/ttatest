import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  // border: solid 1px red;
  width: 100%;
`;
//  z-index: 999;

const Content = styled.section`
  // border: solid 1px violet;
  width: 100%;
  flex: 1;
  padding: 25px;
  display: flex;
`;

//   max-width: ${size("maxWidth")};
const Footer = styled.footer`
  height: 50px;
`;

const DefaultTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props} className="DT">
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
};

// DefaultTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   hero: PropTypes.node,
//   sponsor: PropTypes.node,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired,
// };

// DefaultTemplate.defaultProps = {
//   // header: "header  ",
//   // hero: "hero    ",
//   // sponsor: "sponsor ",
//   // footer: "footer  ",
//   // children: "children",
// };

export default DefaultTemplate;
