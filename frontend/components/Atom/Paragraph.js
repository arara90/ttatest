import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//   font-size: ${(props) => props.theme.fontSize[props.fontSize]};
const P = styled.p`
  font-size: ${({ theme: { fontSizes } }) => (props) => {
    fontSizes.get(props.fontSize);
  }};
`;

function Paragraph(props) {
  return (
    <P {...props} color="WHITE">
      {props.children}
      {console.log(typeof props, props)}
    </P>
  );
}

export default Paragraph;

Paragraph.propTypes = {
  fontSize: PropTypes.string,
};

Paragraph.defaultProps = {
  fontSize: "small",
};
