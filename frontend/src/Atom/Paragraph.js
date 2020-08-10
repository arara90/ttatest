import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const P = styled.p`
  font-size: ${({ theme: { fontSizes } }) => fontSizes[props.fontSize]};
  color: white;
`;

function Paragraph(props) {
  return <P {...props}>{props.children}</P>;
}

export default Paragraph;

Paragraph.propTypes = {
  fontSize: PropTypes.string,
};

Paragraph.defaultProps = {
  fontSize: "small",
};
