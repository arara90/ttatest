import React, {useContext} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "../Atom/Button"
import ModalPortal from "../Atom/ModalPortal"
import { TTAContext } from "../context";

const Wrapper = styled.div`
  
  width: ${props=>props.width};
  height: ${props=>props.height};

  @media screen and (max-width: 640px) {
    width: 90%;
    heidht: 90%;
    }


  max-width: 740px;
  max-height: 920px;

  border-radius: 8px;
  min-height: 1rem;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   background-color: ${props=>props.darkMode ? `${props.theme.colors.BLUE}` : `${props.theme.colors.WHITE}`};

`;

const Content = styled.section`
    width: 100%;
    flex:1 ; 
    boder:solid 1px red;
`

const Buttons = styled.section`
  width: 100%;
  height: 4rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;


const ModalTemplate = ({children, buttons, toggleModal, ...props }) => {
  const { darkMode } = useContext(TTAContext);
  return (
      <ModalPortal children={(
        <Wrapper darkMode={darkMode} {...props}>
            <Content>{children}</Content>
            {buttons &&<Buttons>{buttons}</Buttons>}
      </Wrapper>
      )} />
  );
};

ModalTemplate.propTypes = {
  buttons: PropTypes.node,
  children: PropTypes.node,
  toggleModal: PropTypes.func.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

ModalTemplate.defaultProps = {
  buttons: null,
  children: "children",
  width: "240px",
  height: "400px",
};

export default ModalTemplate;
