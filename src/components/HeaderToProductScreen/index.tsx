import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {TouchableOpacity} from 'react-native-gesture-handler';

import FeatherIcons from 'react-native-vector-icons/Feather';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import {useCart} from '../../hooks/cart';
import colors from '../../utils/colors';

import {Header} from './styles';

interface IHeaderToProductScreen {
  product: {
    id: number;
    title: string;
    cover_path: string;
    author: string;
    publisher: string;
    format_type: string;
  };
}

export default function HeaderToProductScreen({
  product,
}: IHeaderToProductScreen) {
  const navigator = useNavigation();

  const {productsInCart, handleAddProductInCart} = useCart();

  return (
    <Header>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigator.goBack()}>
        <FeatherIcons name="arrow-left" color={colors.white} size={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleAddProductInCart(product)}>
        <IoniconsIcons
          name={
            productsInCart.some(
              productFinded => productFinded.id === product.id,
            )
              ? 'cart'
              : 'cart-outline'
          }
          size={24}
          color={colors.white}
        />
      </TouchableOpacity>
    </Header>
  );
}
