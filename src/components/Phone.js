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
      <div className="phone">
        <h3>{this.props.name}</h3>
        <img className="phoneImg" src={imgURL} />
        <p>{this.props.price}</p>
        <button onClick={this.props.handleCart}>add to cart</button>
      </div>
    );
  }
}

export default Phone;
