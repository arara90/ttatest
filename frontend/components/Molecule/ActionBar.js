import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ImageButton from "../Atom/ImageButton";
import Paragraph from "../Atom/Paragraph";

const Wrap = styled.div`
  height: 40px;
  padding: 0px 10px 0px 10px;
  background-color: ${({ theme: { colors } }) => colors.DARKBLUE};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

function ActionBar(props) {
  return (
    <Wrap>
      <ImageButton
        width="20px"
        height="20px"
        src="https://bucket-simtime.s3.ap-northeast-2.amazonaws.com/static/assets/img/icons/home-white.png"
      />
      Home
      <ImageButton
        width="20px"
        height="21px"
        src="https://bucket-simtime.s3.ap-northeast-2.amazonaws.com/static/assets/img/icons/moon.png"
        onClick={props.themeClickEvent}
      />
    </Wrap>
  );
}

export default ActionBar;

ActionBar.propTypes = {
  themeClickEvent: PropTypes.func,
};

ActionBar.defaultProps = {
  themeClickEvent: () => {},
};
