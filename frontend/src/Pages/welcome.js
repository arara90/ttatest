import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    box-sizing: border-box;
    width: 375px;
    height: 667px;
    border: solid 1px red;

    display: flex;
    flex-direction: column;
    background-color: #78b0ed;

    padding-top: 46px;
    
`

const Section = styled.section`
    margin-top: 72px;

`

const Title = styled.div`
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`


const SubTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
`

const Selections = styled.ol`
    margin-top: 28px;
    padding-left: 0px;
    display: flex;
    flex-direction: column;
    justify-contents: flex-start;
    align-items: center;
`

const Selection = styled.li`
    box-sizing: border-box;

    list-style:none;
    width: 293px;
    height: 44px;
    border-radius: 8px;
    background-color: #ffffff;
    margin-top: 10px;

    padding: 10px 20px 10px 20px;
    line-height: 24px;
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #5c5c5c;

    &.selected{
        color: #ffffff;
        background-color: #7872f7;
    }
    
`

function welcome() {
    return (
        <Wrap>
            <Section className="Title">
                <Title>TTA 정보용어사전 문제집</Title>
            </Section>

            <Section className="">
                <SubTitle>문제를 선택해주세요</SubTitle>
                <Selections>
                    <Selection className="selected">신규용어</Selection>
                    <Selection>신규용어</Selection>
                    <Selection>신규용어</Selection>
                    <Selection>신규용어</Selection>
                </Selections>
            </Section>
        </Wrap>
    )
}

export default welcome
