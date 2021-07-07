import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {useContext} from 'react';
import {useEffect} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {createContext} from 'react';

import {IProduct} from './../@types/product';

interface ICartContext {
  productsInCart: IProduct[];
  handleAddProductInCart(product: IProduct): void;
}

const CartContext = createContext({} as ICartContext);

export const CartProvider: React.FC = ({children}) => {
  const [productsInCart, setProductsInCart] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadData() {
      const productsInCartFindedInAsyncStorage = await AsyncStorage.getItem(
        '@Pilgrim:ProductsInCart',
      );

      if (productsInCartFindedInAsyncStorage) {
        setProductsInCart(JSON.parse(productsInCartFindedInAsyncStorage));
      }
    }

    loadData();
  }, []);

  const handleAddProductInCart = useCallback(
    async (product: IProduct) => {
      const checkProductAlreadyIsInCart = productsInCart.some(
        productFinded => productFinded.id === product.id,
      );

      if (checkProductAlreadyIsInCart) {
        const newProductsInCartArray = productsInCart.filter(
          productFinded => productFinded.id !== product.id,
        );

        setProductsInCart(newProductsInCartArray);
        await AsyncStorage.setItem(
          '@Pilgrim:ProductsInCart',
          JSON.stringify(newProductsInCartArray),
        );
      } else {
        const newProductsInCartArray = [...productsInCart, product];

        setProductsInCart(newProductsInCartArray);
        await AsyncStorage.setItem(
          '@Pilgrim:ProductsInCart',
          JSON.stringify(newProductsInCartArray),
        );
      }
    },
    [productsInCart],
  );

  return (
    <CartContext.Provider value={{productsInCart, handleAddProductInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): ICartContext {
  const {productsInCart, handleAddProductInCart} = useContext(CartContext);

  return {productsInCart, handleAddProductInCart};
}
