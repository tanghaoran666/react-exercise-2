import React from 'react';
import Phone from './Phone';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [
        {
          name: 'iphone11',
          price: 5999,
        },
        {
          name: 'iphoneXs',
          price: 5399,
        },
      ],
    };
  }

  //   increaseCart(){

  //   }

  render() {
    return (
      <div>
        {this.state.phones.map((phone) => (
          <Phone name={phone.name} key={phone.name} price={phone.price} />
        ))}
      </div>
    );
  }
}

export default Phones;
