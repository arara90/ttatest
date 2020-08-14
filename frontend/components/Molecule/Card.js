import React from 'react'
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import Paragraph from "../Atom/Paragraph"


const Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const ContentWrap = styled.div`
  flex: 1;
  background-color: ${({ theme: { colors } }) => colors.WHITE};
  border-radius: 8px;
  box-shadow: 0 0 13px 0 rgba(43, 43, 43, 0.5);
  word-break: break-word;
  
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
`

const Content = styled(Paragraph)`
    font-weight: bold;

    position: absolute;
    top:0;
    left:0;

    @media screen and (max-width: 640px) {
    padding: 1.2rem;
    font-Size:${props=>props.theme.fontSizes.small};
    
    }

    @media screen and (min-width: 640px)  {
    padding: 1.5rem;
    font-Size:${props=>props.theme.fontSizes.medium};
    }
`

function Card(props) {
    return (
        <Wrap>
            <ContentWrap>
                <Content>
                    {props.children}
                </Content>
            </ContentWrap>
        </Wrap>
    )
}

export default Card
