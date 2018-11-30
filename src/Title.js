import React from 'react';
import styled from 'styled-components';

export default class Title extends React.Component {
  render() {
    return <Text color={this.props.color}>{this.props.children}</Text>;
  }
}

const Text = styled.span`
  position: relative;
  font-size: 48px;
  color: ${p => p.color};
  font-family: 'Roboto slab', sans-serif;
  font-weigh: 700;
`;
