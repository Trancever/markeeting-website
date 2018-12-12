import React from 'react';
import styled from 'styled-components';

export default class BannerImage extends React.Component {
  render() {
    const { visible, data } = this.props;
    return (
      <Image url={data.url} visible={visible}>
        <Text>{data.text}</Text>
      </Image>
    );
  }
}

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${p => `url(${p.url})`};
  background-size: 100% 100%;
  transition: opacity 1s;
  opacity: ${p => (p.visible ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 54px;
  color: #efefef;
  text-align: center;
  font-family: 'Alegreya Sans', sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
`;
