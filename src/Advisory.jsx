import React, {Component} from 'react';
import styled from 'styled-components';

const listContent = [
  {
    item: 'Reducing contrast for any flashing content',
  },
  {
    item: 'Avoiding fully saturated reds for any flashing content',
  },
  {
    item: 'Reducing the number of flashes even if they do not violate thresholds',
  },
  {
    item: 'Providing a mechanism to suppress any flashing content before it begins'
  },
  {
    item: 'Slowing down live material to avoid rapid flashes (as in flashbulbs)'
  },
  {
    item: 'Freezing the image momentarily if 3 flashes within one second are detected'
  },
  {
    item: 'Dropping the contrast ratio if 3 flashes within one second are detected'
  },
  {
    item: 'Allowing users to set a custom flash rate limit'
  }
];

const list = () => (
  listContent.map( (items) => <li>{items.item}</li>)
);

const StyledList = styled.ul`
  text-align: left;
  line-height: 2rem;
`;

const StyledContainer = styled.section`
  max-width: 30rem;
  text-align: left;
  padding: 10px;
`;

export default class Advisory extends Component {
  render() {
    return (
      <StyledContainer>
      <h4 className="Advisory">Advisory Techniques</h4>
      <StyledList> { list() } </StyledList>
      </StyledContainer>
    );
  }
}

