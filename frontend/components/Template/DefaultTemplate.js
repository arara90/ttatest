import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  width: 100%;
`;

const Content = styled.section`
  width: 100%;
  flex: 1;
  padding: 1.5rem;
  display: flex;
`;

const Footer = styled.footer`
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
