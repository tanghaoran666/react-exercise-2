/* eslint-disable react/prop-types */
import React from 'react';
import Phone from './Phone';

class Brand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [],
    };
  }

  //   increaseCart(){

  //   }

  render() {
    return (
      <div>
        <div>
          <h2>this.props.phones.category</h2>
        </div>
        {this.props.phones.map((phone) => (
          <Phone name={phone.name} key={phone.name} price={phone.price} />
        ))}
      </div>
    );
  }
}

export default Brand;
