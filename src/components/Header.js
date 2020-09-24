import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import './Header.css';

// eslint-disable-next-line react/prop-types
const Header = ({ number }) => (
  <header>
    <div className="head">
      <h2>Store</h2>
    </div>
    <div className="cartNum">
      <ShoppingCartOutlined />
      <Badge count={number} />
    </div>
  </header>
);

export default Header;
