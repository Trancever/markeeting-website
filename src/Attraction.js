import React from 'react';
import styled from 'styled-components';

export default class Attraction extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Container>
        <InnerContainer>
          <Image src={data.url} alt="atrakcja" />
          <Title>{data.title}</Title>
          <Color>{data.color}</Color>
          <Description>{data.description}</Description>
        </InnerContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 17px;
  font-family: 'Roboto slab', sans-serif;
`;

const Color = styled.span`
  font-size: 22px;
  font-family: 'Roboto slab', sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
`;
