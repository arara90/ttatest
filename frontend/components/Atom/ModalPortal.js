import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { TTAContext } from "../context";

const MyModal = styled.div`
  background: rgba(0, 0, 0, 0.20);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ContentWrap = styled.div`
  background-color: ${props=>props.darkMode ? `${props.theme.colors.BLUE}` : `${props.theme.colors.WHITE}`};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  // width: 90%;
  // height: 80%;
`;


const ModalPortal = (props) => {
  const el = document.getElementById("modal");
  let { modal } = React.useContext(TTAContext);

  if (modal) {
    return ReactDOM.createPortal(
      <Fragment>
        <MyModal className="ttaModal">
          {props.children}
        </MyModal>
      </Fragment>,
      el
    );
  } else return null;
};

export default ModalPortal;