import React, { Component } from 'react';
import Flashh from './Flashh.jsx';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  display: flex;
  width: 10rem;
  margin: 0 auto 10px auto;
  justify-content: space-around;
`;

export default class Flash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flashing: false,
      small: false,
    };
  }

  start() {
    this.setState({flashing: !this.state.flashing});
    setTimeout(() => {
      this.setState({
        flashing: false
      });
    }, 1000);
  }

  toggleSmall() {
    this.setState({small: !this.state.small});
  }

  get Button() {
    const {flashing} = this.state;
    return <button disabled={flashing} onClick={ () => this.start() }>{ flashing ? 'stop' : 'start' }</button>
  }

  get SmallButton() {
    const {small} = this.state;
    return <button onClick={ () => this.toggleSmall() }>{ small ? 'large' : 'small' }</button>
  }

  render() {
    return (
      <div>
        <ButtonDiv>
        { this.Button }
        { this.SmallButton }
        </ButtonDiv>
        <Flashh small={this.state.small} on={this.state.flashing} />
      </div>
    );
  }
}