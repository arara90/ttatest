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
  // border: solid 1px black;
`;



const ResultTemplate = ({children, ...props}) => {
  return (
    <Wrapper {...props} className="DT">
      {children}
    </Wrapper>
  );
};

// ResultTemplate.propTypes = {
//   header: PropTypes.node.isRequired,
//   hero: PropTypes.node,
//   sponsor: PropTypes.node,
//   footer: PropTypes.node.isRequired,
//   children: PropTypes.any.isRequired,
// };

// ResultTemplate.defaultProps = {
//   // header: "header  ",
//   // hero: "hero    ",
//   // sponsor: "sponsor ",
//   // footer: "footer  ",
//   // children: "children",
// };

export default ResultTemplate;
