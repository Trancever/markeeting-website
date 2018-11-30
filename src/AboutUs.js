import React from 'react';
import styled from 'styled-components';

import Title from './Title';

export default class AboutUs extends React.Component {
  render() {
    return (
      <Container id="o-nas">
        <BackgroundImage />
        <Title color="#63c226">O NAS</Title>
        <Description>Bla bla bla</Description>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('http://trollandia.pl/sites/all/themes/trollandia/css/images/tło-menu-parki.jpg');
  background-size: 100% 100%;
`;

const Description = styled.span`
  position: relative;
  color: #efefef;
  font-size: 24px;
  font-family: 'Alegreya Sans', sans-serif;
`;
