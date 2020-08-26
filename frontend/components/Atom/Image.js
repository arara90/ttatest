import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Img = styled.img`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

function Image(props) {
  var src = "https://bucket-simtime.s3.ap-northeast-2.amazonaws.com/static/assets/img/icons/" + props.icon
  return <Img src={src} {...props} />;
}

export default Image;

Image.propTypes = {
  icon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  icon: "forbidden.png",
  width: "auto",
  height: "auto",
};
