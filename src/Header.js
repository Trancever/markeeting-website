import React, { Fragment } from 'react';
import styled from 'styled-components';

import { device } from './device';
import logo from './assets/park-linowy.png';
import hamburger from './assets/menu.png';

export default class Header extends React.Component {
  state = {
    open: false,
  };

  onLinkCLick = section => {
    this.props.onLinkCLick(section);
    this.setState({ open: false });
  };

  render() {
    return (
      <Fragment>
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
            <HamburgerContainer>
              <Hamburger
                src={hamburger}
                onClick={() => this.setState(state => ({ open: !state.open }))}
              />
            </HamburgerContainer>
          </Container>
        </Wrapper>
        <LinksContainer open={this.state.open}>
          <ExpandedLink onClick={this.onLinkCLick.bind(null, 'our-parks')}>
            Parki
          </ExpandedLink>
          <ExpandedLink onClick={this.onLinkCLick.bind(null, 'attractions')}>
            Atrakcje
          </ExpandedLink>
          <ExpandedLink onClick={this.onLinkCLick.bind(null, 'offer')}>
            Oferta
          </ExpandedLink>
          <ExpandedLink onClick={this.onLinkCLick.bind(null, 'security')}>
            Bezpieczeństwo
          </ExpandedLink>
          <ExpandedLink onClick={this.onLinkCLick.bind(null, 'contact')}>
            Kontakt
          </ExpandedLink>
        </LinksContainer>
      </Fragment>
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
  font-size: 20px;
  padding-left: 20px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const HamburgerContainer = styled.div`
  flex: 4;
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;

  @media ${device.mobile} {
    display: flex;
  }
`;

const Hamburger = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 15px;
  cursor: pointer;
`;

const ExpandedLink = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #000;
  font-size: 23px;
  width: 100%;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
  background-color: rgba(99, 194, 38, 0.8);
  border: none;
  cursor: pointer;
  outline: none;
  flex: 1;

  padding-top: 20px;
  border: 1px solid rgba(99, 194, 38, 1);
  padding-bottom: 20px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
  top: 100px;
  position: fixed;
  z-index: 100;
  transition: opacity 0.6s;

  @media ${device.mobile} {
    opacity: ${p => (p.open ? 1 : 0)};
    display: block;
    pointer-events: ${p => (p.open ? 'auto' : 'none')};
  }
`;
