import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  // border: solid 1px black;
`;

const Header = styled.header`
  width: 100%;
`;
//  z-index: 999;

const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingTemplate = ({ header, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
};

// EmptyTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   hero: PropTypes.node,
//   sponsor: PropTypes.node,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired,
// };

// EmptyTemplate.defaultProps = {
//   // header: "header  ",
//   // hero: "hero    ",
//   // sponsor: "sponsor ",
//   // footer: "footer  ",
//   // children: "children",
// };

export default LoadingTemplate;
