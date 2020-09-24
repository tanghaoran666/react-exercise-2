import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Phone from './components/Phone';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartNum: 0,
      products: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('http://localhost:3000/products');
      const result = await data.json();
      this.setState({ products: result });
    } catch (err) {
      console.log(err);
    }
  }

  handleCart = () => {
    this.setState({ cartNum: this.state.cartNum + 1 });
  };

  render() {
    return (
      <div className="all">
        <main className="app">
          <Header number={this.state.cartNum} />
          <h3 style={{ margin: 20 }}>Iphone</h3>
          <div className="phones">
            {this.state.products.map((item) => (
              <Phone
                handleCart={this.handleCart}
                name={item.name}
                price={item.price}
                key={item.name}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
