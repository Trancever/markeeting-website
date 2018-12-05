import React from 'react';
import styled from 'styled-components';
import Map from './Map';

import Title from './Title';

export default class ContactSection extends React.Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <TitleContainer>
            <Title color="#efefef">Kontakt</Title>
          </TitleContainer>
          <InnerContainer>
            <Section>
              <Entry>
                <TitleText>Manager: Dawid Urbaniak</TitleText>
                <Phone>
                  Tel.: <Number>+48 693275019</Number>
                </Phone>
                <Extra>tarzan@parklinowy.com</Extra>
              </Entry>
              <Entry>
                <TitleText>TARZAN PABIANICE</TitleText>
                <Phone>
                  Tel.: <Number>+48 662120000</Number>
                </Phone>
              </Entry>
              <Entry>
                <TitleText>TARZAN ALEKSANDRÓW ŁÓDZKI</TitleText>
                <Phone>
                  Tel.: <Number>+48 678234654</Number>
                </Phone>
              </Entry>
              <Entry>
                <TitleText>TARZAN PIOTRKÓW TRYB.</TitleText>
                <Phone>
                  Tel.: <Number>+48 678901321</Number>
                </Phone>
              </Entry>
            </Section>
            <Section>
              <Entry>
                <TitleText>Project Tarzan Polska</TitleText>
                <TitleText>
                  Spółka z ograniczoną odpowiedzialnością Sp.k.
                </TitleText>
                <TitleText>ul. Gen. J. Kustronia 99, 43-312 Łódź</TitleText>
                <TitleText>NIP: 5472088849</TitleText>
              </Entry>
              <Entry>
                <Phone>
                  Tel.: <Number>+48 756928019</Number>
                </Phone>
                <Phone>
                  Fax.: <Number>+48 5367927574</Number>
                </Phone>
              </Entry>
              <Entry>
                <TitleText>DORADCA DS. INWESTYCJI</TitleText>
                <TitleText>Szymon Tosik</TitleText>
                <Phone>
                  Tel.: <Number>+48 583781034</Number>
                </Phone>
                <Phone>
                  E-mail: <Number>szymon.tosik@tarzan.com</Number>
                </Phone>
              </Entry>
            </Section>
          </InnerContainer>
        </LeftContainer>
        <RightContainer>
          <MapContainer>
            <Map />
            <MapTitle>Znajdź nas na mapie!</MapTitle>
          </MapContainer>
        </RightContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  background-color: #101010;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 80px;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: 'Source sans pro', sans-serif;
  font-size: 14px;
`;

const TitleText = styled.span``;

const Phone = styled.span``;

const Number = styled.span`
  color: #63c226;
`;

const Extra = styled.span`
  color: #63c226;
  cursor: pointer;

  transition: color 0.15s;

  &:hover {
    color: rgba(99, 194, 38, 0.7);
  }
`;

const MapContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;

const MapTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #63c226;
  font-size: 48px;
  font-family: 'Roboto slab', sans-serif;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
  pointer-events: none;
`;
