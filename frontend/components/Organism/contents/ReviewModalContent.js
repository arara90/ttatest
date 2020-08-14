import React,{useContext} from 'react'
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "../../Molecule/Card"
import Paragraph from '../../Atom/Paragraph';

import { TTAContext } from "../../context";

const Wrap = styled.section`
    width: 100%;
    height: 100%;

    min-height: 100px;
    min-width: 100px;

    display: flex;
    flex-direction: column;
    justify-constent: space-between;
    align-items: center;
    
`

const Title = styled(Paragraph)`
    padding-bottom: 1rem;
    font-width: bold;

    color: ${props=>props.darkMode ? `${props.theme.colors.WHITE}` : `${props.theme.colors.DARKFONT}`};
`

const StyledCard = styled(Card)`
    flex: 1;
    height: 100%;
    width: 100%;

    padding-bottom: 1em;
    font-weight: bold;
`

function ReviewModalContent(props) {
    const { darkMode } = useContext(TTAContext);
    return (
        <Wrap>
            <Title darkMode={darkMode} fontSize={"large"}>{props.content.title}</Title>
            <StyledCard>
                {props.content.content}
            </StyledCard>
        </Wrap>
    )
}

export default ReviewModalContent

  
