import React, {Component} from 'react';
import styled from 'styled-components';

const listContent = [
  {
    item: 'Ensuring that no component of the content flashes more than 3 times in any 1-second period',
    link: 'https://www.w3.org/TR/WCAG20-TECHS/G19.html'
  },
  {
    item: 'Keeping the flashing area small enough',
    link: 'https://www.w3.org/TR/WCAG20-TECHS/G176.html'
  },
  {
    item: 'Using a tool to ensure that content does not violate the general flash threshold or red flash threshold',
    link: 'https://www.w3.org/TR/WCAG20-TECHS/G15.html'
  }
];

const list = () => (
  listContent.map( (items) => <li><a href={items.link}>{items.item}</a></li>)
);

const StyledList = styled.ol`
  text-align: left;
  line-height: 2rem;
  max-width: 30rem;
`;
export default class List extends Component {
  render() {
    return <StyledList> { list() } </StyledList>
  }
}

