import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const P = styled.p`  
  color: ${props=>props.theme.colors.[props.color]};
  font-size: ${props=>props.theme.fontSizes.[props.fontSize]};

  font-stretch: normal;
  font-style: normal;
  line-height: 1.5em;
  letter-spacing: normal;

  
`

function Paragraph(props) {
  return (
    <P {...props}>
      {props.children}
    </P>
  );
}

export default Paragraph;

Paragraph.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
};

Paragraph.defaultProps = {
  color: "DARKFONT",
  fontSize: "small",
};
