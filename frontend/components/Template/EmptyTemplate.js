import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EmptyTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props} className="DT">
      {children}
    </Wrapper>
  );
};

EmptyTemplate.propTypes = {
  children: PropTypes.node,
};

EmptyTemplate.defaultProps = {
  children: "children",
};

export default EmptyTemplate;
