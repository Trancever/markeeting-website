import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { device } from './device';

export default class ParkDescription extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title color="#63C226">Park linowy {this.props.name}</Title>
          <InnerContainer>
            <Paragraph>
              Park linowy położony w lesie obok dolnej stacji kolejki PKL na
              Górę Żar. Park linowy stanowi wysokościowy system platform i
              przeszkód linowych zainstalowanych na drzewach. Bawić się tu mogą
              zarówno osoby dorosłe, jak i dzieci od 8 roku życia (sięgnięcie
              ręka na wysokość 1,70 m)- trasy wysokie, od 3 do 13 lat – mini
              park Linowy.
            </Paragraph>
            <Paragraph>
              Przed wejściem na trasy wysokie każdy uczestnik zostaje ubrany w
              atestowany sprzęt asekuracyjny oraz zostaje przeszkolony z zasad
              posługiwania się nim. Nad bezpieczeństwem uczestników czuwają
              wykwalifikowani instruktorzy.
            </Paragraph>
          </InnerContainer>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  background-color: black;
`;

const Wrapper = styled.div`
  flex: 1;
  margin-left: 200px;
  margin-right: 200px;
  padding-top: 100px;
  padding-bottom: 200px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.mobile} {
    margin-left: 40px;
    maegin-right: 40px;
  }
`;

const InnerContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Paragraph = styled.span`
  color: #dedede;
  margin-bottom: 20px;
  font-size: 16px;
  font-family: 'Roboto slab', sans-serif;
`;
