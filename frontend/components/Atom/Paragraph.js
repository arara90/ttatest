import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// const P = styled.p`
//   font-size: ${({ theme: { fontSizes } }) => (props) => {
//     fontSizes.get(props.fontSize);
//   }};
// `;

const P = styled.p`
`

function Paragraph(props) {
  return (
    <P {...props} color="WHITE">
      {props.children}
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
