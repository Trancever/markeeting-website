import React from 'react';
import styled from 'styled-components';

import logo from './assets/park-linowy.png';

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftContainer onClick={this.props.onLinkCLick.bind(null, 'top')}>
            <Logo
              src={logo}
              alt="logo"
              onClick={this.props.onLinkCLick.bind(null, 'top')}
            />
          </LeftContainer>
          <RightContainer>
            <Link onClick={this.props.onLinkCLick.bind(null, 'our-parks')}>
              Parki
            </Link>
            <Link onClick={this.props.onLinkCLick.bind(null, 'attractions')}>
              Atrakcje
            </Link>
            <Link onClick={this.props.onLinkCLick.bind(null, 'offer')}>
              Oferta
            </Link>
            <Link onClick={this.props.onLinkCLick.bind(null, 'security')}>
              Bezpieczeństwo
            </Link>
            <Link onClick={this.props.onLinkCLick.bind(null, 'contact')}>
              Kontakt
            </Link>
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
  flex: 0.8;
  flex-direction: column;
  padding-left: 30px;
  justify-content: center;
  cursor: pointer;
`;

const Name = styled.span`
  font-size: 20px;
  margin-left: 2px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: extra-light;
  /* text-shadow: 1px 1px rgba(0, 0, 0, 0.2); */
`;

const Site = styled.span`
  font-size: 36px;
  height: 28px;
  font-family: 'Alegreya sans', sans-serif;
  text-shadow: 2px 2px 1px rgba(81, 173, 24, 0.9);
`;

const CenterContainer = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  height: 70px;
  cursor: pointer;
`;

const RightContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`;

const Link = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 20px;
  padding-left: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
