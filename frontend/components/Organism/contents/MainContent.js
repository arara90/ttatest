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

  padding-top: 50px;

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

  
  padding-top: 40px;
`;

const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 1rem;
  width: 100%;
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
            <Button className="content-selection">전체 랜덤</Button>
          </Li>
          <Li>
            <Button>2020년도(상반기)</Button>
          </Li>
          <Li>
            <Button>2019년도</Button>
          </Li>
          <Li>
            <Button>2018년도</Button>
          </Li>
        </Ol>
      </Section>
    </Wrap>
    )
}

export default MainContent
