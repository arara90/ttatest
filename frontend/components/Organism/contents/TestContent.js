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

  display: flex;
`;

const Quiz = styled.div`
  flex: 1;
  display: flex;
`;


const Card = styled.div`
  flex: 1;
  width: 100%;
  word-break: break-all;

  margin-top: 10px;
  margin-bottom: 15px;

  padding: 15px;

  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 13px 0 rgba(43, 43, 43, 0.5);

  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

`;

const Ol = styled.ol`
  flex: 1;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  justify-content: flex-start;
  align-items: center;
`;

const Li = styled.li`

  flex: 1;
  list-style: none;
  padding-top: 15px;
  width: 100%;
`;

function Test() {
    return (
    <Wrap>
      <Section className="test-quiz">
        <Quiz>
          <Card>
            <p> 문제1 </p>
            <p style={{width: "100%"}}>ljkaaaaaaaaaaaaaaaaaaaaaaaaaaadffffffffffffff</p>
          </Card>
        </Quiz>
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

export default Test
