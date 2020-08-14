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

DefaultTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node,
  children: PropTypes.node,
};

DefaultTemplate.defaultProps = {
  header: "header  ",
  footer: "footer  ",
  children: "children",
};

export default DefaultTemplate;
