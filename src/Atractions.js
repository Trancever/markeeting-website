import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Attraction from './Attraction';
import { attractions } from './constants';
import { device } from './device';

export default class Atractions extends React.Component {
  render() {
    return (
      <Container ref={this.props.myRef} id="atrakcje">
        <BackgroundImage />
        <InnerContainer>
          <TitleContainer>
            <Title>ATRAKCJE TARZANA</Title>
          </TitleContainer>
          <AttractionsContainer>
            {attractions.map((attraction, index) => (
              <Attraction key={index} data={attraction} />
            ))}
          </AttractionsContainer>
        </InnerContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #f7cd00;
`;

const BackgroundImage = styled.div`
  top: -100px;
  position: absolute;
  width: 100%;
  height: 110px;
  background-image: url('http://trollandia.pl/sites/all/themes/trollandia/css/images/atrakcje-tlo-top.png');
  background-size: 100% 100%;
`;

const InnerContainer = styled.div`
  margin: 100px 150px 50px 150px;
  display: flex;
  flex: 1;
  flex-direction: column;

  @media ${device.mobile} {
    margin: 100px 10px 50px 10px;
  }
`;

const TitleContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const AttractionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;
