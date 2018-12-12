import React from 'react';
import styled from 'styled-components';

import BannerImage from './BannerImage';
import { device } from './device';

const assets = [
  {
    url:
      'http://trollandia.pl/sites/default/files/styles/1920x1080/public/a_1.jpg?itok=n2flj6jf',
    text: 'Nietypowe Przeszkody',
  },
  {
    url:
      'http://trollandia.pl/sites/default/files/styles/1920x1080/public/b_0.JPG?itok=ukGgCCMB',
    text: 'Super Zabawa',
  },
  {
    url:
      'http://trollandia.pl/sites/default/files/styles/1920x1080/public/136.jpg?itok=K9YbLR6Z',
    text: 'Bezpieczna Dawka Adrenaliny',
  },
];

export default class Banner extends React.Component {
  state = {
    imageIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(({ imageIndex }) => ({
        imageIndex: imageIndex === 2 ? 0 : imageIndex + 1,
      }));
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { imageIndex } = this.state;
    return (
      <Container>
        <BannerImage data={assets[0]} visible={imageIndex === 0} />
        <BannerImage data={assets[1]} visible={imageIndex === 1} />
        <BannerImage data={assets[2]} visible={imageIndex === 2} />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 750px;
  background-color: #000;
  margin-top: 100px;
  position: relative;

  @media ${device.mobile} {
    height: 400px;
  }
`;
