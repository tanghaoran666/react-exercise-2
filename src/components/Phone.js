/* eslint-disable react/prop-types */
import React from 'react';
import imgURL from './../assets/product_image_placeholder.png';
import './Phone.css';

class Phone extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={imgURL} />
        <p>{this.props.price}</p>
        <button>add to cart</button>
      </div>
    );
  }
}

export default Phone;
