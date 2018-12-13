import React from 'react';
import styled from 'styled-components';

import { device } from './device';

export default class StaticBanner extends React.Component {
  render() {
    return (
      <Container>
        <Image url={this.props.url} />
        <Shadow />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 600px;
  background-color: #000;
  margin-top: 100px;
  position: relative;

  @media ${device.mobile} {
    height: 350px;
  }
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${p => `url(${p.url})`};
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Shadow = styled.div`
  box-shadow: 0 0 170px 195px rgba(0, 0, 0, 0.9);
  position: absolute;
  bottom: 0;
  width: 100%;
`;
