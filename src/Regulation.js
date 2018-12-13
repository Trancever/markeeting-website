import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import { device } from './device';

export default class Regulation extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title color="#63C226">Regulamin</Title>
          <List>
            <Item>
              <Number>1.</Number>
              <Description>
                Wejście na platformy w Parku Linowymi wykonywanie na nich
                jakichkolwiek czynności może mieć miejsce tylko i wyłącznie po
                zapoznaniu się z regulaminem, zakupie biletu, odbyciu szkolenia
                instruktażowego i dopuszczenie przez instruktora.
              </Description>
            </Item>
            <Item>
              <Number>2.</Number>
              <Description>
                Osobom, które w trakcie programu zrezygnują z dalszej
                kontynuacji nie będą zwracane koszty biletu, chyba że przyczyna
                rezygnacji nie leży po ich stronie.
              </Description>
            </Item>
            <Item>
              <Number>3.</Number>
              <Description>
                Podczas przechodzenia przez Park Linowy należy zachowywać się
                spokojnie, nie skakać po przeszkodach, nie biegać, nie
                hałasować. W każdym czasie należy zachować najwyższą ostrożność.
              </Description>
            </Item>
            <Item>
              <Number>4.</Number>
              <Description>
                Podczas wizyty w Parku Linowym należy bezwzględnie wykonywać
                polecenia instruktorów
              </Description>
            </Item>
            <Item>
              <Number>5.</Number>
              <Description>
                Osoby znajdujące się na terenie Parku Linowego nie mogą swoim
                zachowaniem zarówno na ziemi jak i na wysokości stwarzać
                zagrożenia dla życia lub zdrowia swojego lub innych.
              </Description>
            </Item>
            <Item>
              <Number>6.</Number>
              <Description>
                Osoby znajdujące się na terenie Parku Linowego nie mogą
                znajdować się pod wpływem alkoholu, narkotyków ani innych
                środków mogących mieć wpływ na prawidłową pracę organizmu
                ludzkiego.
              </Description>
            </Item>
            <Item>
              <Number>7.</Number>
              <Description>
                Na terenie Parku Linowego zabronione jest wnoszenie oraz
                spożywanie alkoholu i palenie tytoniu.
              </Description>
            </Item>
          </List>
        </Wrapper>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  background-color: black;
  display: flex;
`;

const Wrapper = styled.div`
  flex: 1;
  margin-left: 200px;
  margin-right: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    margin-left: 40px;
    maegin-right: 40px;
  }
`;

const List = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  color: #dedede;
  position: relative;
  margin-top: 30px;
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  font-size: 16px;
  font-family: 'Roboto slab', sans-serif;
  margin-bottom: 10px;
`;

const Number = styled.div`
  margin-right: 20px;
`;

const Description = styled.span`
  flex: 1;
`;
