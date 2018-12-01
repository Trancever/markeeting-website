import React from 'react';
import styled from 'styled-components';

import Title from './Title';

export default class AboutUs extends React.Component {
  render() {
    return (
      <Container ref={this.props.myRef} id="o-nas">
        <BackgroundImage />
        <TitleContainer>
          <Title color="#63c226">NASZE PARKI</Title>
        </TitleContainer>
        <ContentContainer>
          <ParkContainer>
            <Park>
              <ParkImage url="http://trollandia.pl/sites/default/files/styles/miniaturka_park/public/parki.linowe.0406.jpg?itok=xjpcbksb" />
              <ParkBottomSheet>
                <City>Piotrków Tryb.</City>
              </ParkBottomSheet>
            </Park>
          </ParkContainer>
          <ParkContainer>
            <Park>
              <ParkImage url="http://trollandia.pl/sites/default/files/styles/miniaturka_park/public/szklarska-home.jpg?itok=0dthphIO" />
              <ParkBottomSheet>
                <City>Pabianice</City>
              </ParkBottomSheet>
            </Park>
          </ParkContainer>
          <ParkContainer>
            <Park>
              <ParkImage url="http://trollandia.pl/sites/default/files/styles/miniaturka_park/public/13920677_10208825787035991_900227806762529075_n_brenna_0.jpg?itok=d1hb3sXA" />
              <ParkBottomSheet>
                <City>Aleksandrów Łódzki</City>
              </ParkBottomSheet>
            </Park>
          </ParkContainer>
        </ContentContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url('http://trollandia.pl/sites/all/themes/trollandia/css/images/tło-menu-parki.jpg');
  background-size: 100%;
`;

const TitleContainer = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 330px;
  margin-right: 330px;
  z-index: 1;
  padding-top: 50px;
  padding-bottom: 100px;
  margin-bottom: 100px;
`;

const ParkContainer = styled.div`
  height: 330px;
  display: flex;
  width: 33%;
`;

const Park = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  baxkground-color: green;
  display: flex;
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
  background-color: rgba(99, 194, 38, 0.85);
  overflow: hidden;

  &:hover {
    background-color: rgba(247, 205, 0, 0.85);
  }
`;

const ParkImage = styled.div`
  background-image: url(${p => p.url});
  background-size: 100% 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const ParkBottomSheet = styled.div`
  background-color: inherit;
  height: 90px;
  width: 100%;
  position: relative;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const City = styled.span`
  text-align: center;
  font-size: 24px;
  font-family: 'Roboto slab', sans-serif;
`;
