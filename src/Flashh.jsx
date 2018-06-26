import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const CSSVariables = styled.div`
  --color: ${props => props.color};
`;

const keyFrameExampleOne = keyframes`
  0%, 49% {
    background: rgb(var(--color), 0, 0);
  }
  50%, 100% {
    background: orange;
  }
`;

const FlashingThing = styled.div`
  height: 100px;
  background: rgb(var(--color), 0, 0);
  animation: ${props => props.on ? `${keyFrameExampleOne} 500ms 2` : 'none' };
  width: ${props => props.small ? '25%' : '100%'};
`;

const Sickle = styled.h2`
 font-size: 1rem;
`;

const Cowboy = styled.h2`
font-size: 2em;
`;
export default class Flashh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 255
    };
  }

  handleChange = (event) => {
    console.log('event', event.target.value);
    this.setState({color: event.target.value});
  };
  // handleClick = () => { this.setState({color: 'green'}); }
  render() {
    return (
      <div>
        <CSSVariables color={ this.state.color }>
          <input type="range" min="0" max="255" onChange={ this.handleChange } />
          <FlashingThing small={this.props.small} on={this.props.on} style={{fontSize: `${this.state.color/ 10}px` }}>👌</FlashingThing>
          { this.state.color < 100 ? <Cowboy>🤠</Cowboy> : null }
          <Sickle>⚒️</Sickle>
        </CSSVariables>
      </div>
    );
  }
}