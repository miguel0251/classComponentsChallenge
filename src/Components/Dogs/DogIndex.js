import React, { Component } from 'react';

class DogIndex extends Component {
  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <button onClick={this.fetchDog}>fetch image</button>
      </div>
    );
  }
}

export default DogIndex;
