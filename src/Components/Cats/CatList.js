import React, { Component } from 'react';
import CatIndex from './CatIndex';

class CatList extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cat) => {
          return <li>{cat}</li>;
        })}
      </div>
    );

    // const cat = this.props.map((cat) => CatList);
    // return (
    //   <div>
    //     <li>{cat}</li>
    //   </div>
    // );
  }
}

export default CatList;
