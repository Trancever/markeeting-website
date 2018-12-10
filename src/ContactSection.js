import React from 'react';
import styled from 'styled-components';
import Map from './Map';

import ContactForm from './ContactForm';

export default class ContactSection extends React.Component {
  render() {
    return (
      <Container>
        <LeftContainer>
          <ContactForm />
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
  display: flex;
  background-color: #101010;
  flex-direction: row;
  padding-bottom: 70px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
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
  margin-top: 30px;
  font-size: 48px;
  font-family: 'Roboto slab', sans-serif;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
  pointer-events: none;
`;
