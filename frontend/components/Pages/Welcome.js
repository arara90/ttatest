import React from "react";
import styled from "styled-components";
import Button from "../Atom/Button";

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  border: solid 1px red;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;

  padding-bottom: 5vh;
`;

const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 15px;
  width: 80%;
`;

function Welcome() {
  return (
    <Wrap>
      <Section className="Title">
        <Title>TTA 정보용어사전 문제집</Title>
      </Section>

      <Section className="">
        <SubTitle>문제를 선택해주세요</SubTitle>
        <Ol>
          <Li>
            <Button className="selected">전체 랜덤</Button>
          </Li>
          <Li>
            <Button>2020년도(상반기) 용어</Button>
          </Li>
          <Li>
            <Button>2019년도 용어</Button>
          </Li>
          <Li>
            <Button>2018년도 용어</Button>
          </Li>
        </Ol>
      </Section>
    </Wrap>
  );
}

export default Welcome;
