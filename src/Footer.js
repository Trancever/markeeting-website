import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import fbIcon from './assets/fb.png';
import twitterIcon from './assets/twitter.png';
import ytIcon from './assets/yt.png';
import instaIcon from './assets/insta.png';
import { device } from './device';

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <Wrapper>
          <Top>
            <TitleContainer>
              <Title color="#efefef">Kontakt</Title>
            </TitleContainer>
            <TitleContainer>
              <Link>
                <Icon src={fbIcon} />
              </Link>
              <Link>
                <Icon src={twitterIcon} />
              </Link>
              <Link>
                <Icon src={ytIcon} />
              </Link>
              <Link margin>
                <Icon src={instaIcon} />
              </Link>
            </TitleContainer>
          </Top>
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
        </Wrapper>
      </FooterContainer>
    );
  }
}

const FooterContainer = styled.footer`
  width: 100vw;
  background-color: #121212;
  padding-top: 50px;
  border-top: 1px solid #333;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 100px;
  padding-right: 100px;

  @media ${device.mobile} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Top = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

const TitleContainer = styled.div`
  margin-bottom: 30px;
  flex: 1;
  display: flex;
  align-items: center;
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

const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Link = styled.div`
  background-color: #f4d113;
  width: 35px;
  height: 35px;
  border-radius: 18px;
  margin-right: ${p => (!p.margin ? 20 : 0)}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
