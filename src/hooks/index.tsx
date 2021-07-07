import React from 'react';
import {CartProvider} from './cart';

const Hooks: React.FC = ({children}) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Hooks;
