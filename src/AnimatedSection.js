import React from 'react';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';

export default class AnimatedSection extends React.Component {
  state = {
    visible: false,
    position: 1200,
  };

  onChange = isVisible => {
    if (!this.state.visible && isVisible) {
      this.setState({ position: 0 });
    }
  };

  renderImage = () => {
    return (
      <Image
        url={this.props.data.url}
        direction={this.props.direction}
        position={this.state.position}
      />
    );
  };

  renderText = data => {
    return (
      <>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        <Button>{data.button}</Button>
      </>
    );
  };

  render() {
    const { color, direction, data } = this.props;
    return (
      <VisibilitySensor onChange={this.onChange} partialVisibility={true}>
        <Container>
          {direction === 'left' ? (
            <>
              <LeftContainer color={color}>
                {this.renderText(data)}
              </LeftContainer>
              <RightContainer color={color}>
                {this.renderImage()}
              </RightContainer>
            </>
          ) : (
            <>
              <RightContainer color={color}>
                {this.renderImage()}
              </RightContainer>
              <LeftContainer color={color}>
                {this.renderText(data)}
              </LeftContainer>
            </>
          )}
        </Container>
      </VisibilitySensor>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 500px;
`;

const LeftContainer = styled.div`
  position: relative;
  flex: 2;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.color};
  padding-left: 80px;
  padding-right: 70px;
  padding-top: 100px;
`;

const RightContainer = styled.div`
  position: relative;
  flex: 7;
  background-color: ${p => p.color};
`;

const Image = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${p => p.url});
  background-size: 100% 100%;
  transition: transform 0.7s ease-out;

  ${p => {
    return p.direction === 'left'
      ? `transform: translateX(${p.position}px)`
      : `transform: translateX(-${p.position}px)`;
  }};
`;

const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  font-family: 'Roboto slab', sans-serif;
  margin-bottom: 20px;
`;

const Description = styled.span`
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  margin-bottom: 50px;
`;

const Button = styled.button`
  border: 1px solid;
  font-size: 20px;
  padding: 12px;
  font-family: 'Alegreya sans', sans-serif;
  background-color: transparent;
  font-family: 'Source sans pro', sans-serif;
  font-weight: bold;
  cursor: pointer;
  width: 230px;
  transition: color 0.5s, background-color 0.5s;
  outline: none;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;
