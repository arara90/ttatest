import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
`;

const Content = styled.section`
  width: 100%;
  flex: 1;
  padding: 25px;
  display: flex;
`;

//   max-width: ${size("maxWidth")};
const Footer = styled.footer`
`;

const MainTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props} className="DT">
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
};

MainTemplate.defaultProps = {
  header: "header  ",
  children: "children",
};

export default MainTemplate;
