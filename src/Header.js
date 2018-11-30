import React from 'react';
import styled from 'styled-components';

import logo from './assets/park-linowy.png';

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftContainer>
            <Name>Park Linowy</Name>
            <Site>TARZAN</Site>
          </LeftContainer>
          <CenterContainer>
            <Logo src={logo} alt="logo" />
          </CenterContainer>
          <RightContainer>
            <Link href="/#o-nas">O nas</Link>
            <Link href="/#atrakcje">Atrakcje</Link>
            <Link href="/#galeria">Galeria</Link>
            <Link href="/#cennik">Cennik</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: #63c226;
  box-shadow: 0px 25px 60px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const Container = styled.div`
  margin: 10px;
  flex: 1;
  flex-direction: row;
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
`;

const Name = styled.span`
  font-size: 24px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: extra-light;
  height: 25px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;

const Site = styled.span`
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

const CenterContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  height: 70px;
`;

const RightContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 20px;
  padding-left: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
`;