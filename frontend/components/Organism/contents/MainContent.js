import React from "react";
import styled from "styled-components";
import Button from "../../Atom/Button";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  flex: 1;
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

  padding-top: 2.5em;
  padding-bottom: 2em;
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

  padding-bottom: 20px;
`;

const Ol = styled.ol`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Li = styled.li`
  display: box;
  padding-bottom: 1em;
  list-style: none;
  width: 100%;
  flex: 1;
`;

const StyledButton = styled(Button)`
  width: 100%;
  min-height: 40px;
`;

function MainContent() {
  return (
    <Wrap>
      <Section className="content-title">
        <Title>TTA 정보용어사전</Title>
        <SubTitle>문제를 선택해주세요</SubTitle>
      </Section>
      <Section className="">
        <Ol>
          <Li>
            <StyledButton className="content-selection">전체 랜덤</StyledButton>
          </Li>
          <Li>
            <StyledButton>2020년도(상반기)</StyledButton>
          </Li>
          <Li>
            <StyledButton>2019년도</StyledButton>
          </Li>
          <Li>
            <StyledButton>2018년도</StyledButton>
          </Li>
        </Ol>
      </Section>
    </Wrap>
  );
}

export default MainContent;
