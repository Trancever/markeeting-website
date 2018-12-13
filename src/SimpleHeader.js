import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import { device } from './device';
import logo from './assets/park-linowy.png';

export default class SimpleHeader extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <LeftContainer onClick={() => navigate('/')}>
            <Logo src={logo} alt="logo" onClick={() => navigate('/')} />
          </LeftContainer>
          <RightContainer>
            <Link>{this.props.route}</Link>
          </RightContainer>
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  width: 100vw;
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

  @media ${device.mobile} {
    display: none;
  }
`;

const Link = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 26px;
  padding-left: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: none;
  outline: none;
`;
