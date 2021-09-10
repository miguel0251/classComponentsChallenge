import React, { Component } from 'react';
import CatIndex from './CatIndex';
import { Container } from 'reactstrap';

class Cats extends Component {
  render() {
    return (
      <Container className='App'>
        <div>
          <CatIndex></CatIndex>
        </div>
      </Container>
    );
  }
}

export default Cats;
