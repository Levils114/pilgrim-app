import React from 'react';
import { TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Icon from 'react-native-vector-icons/Ionicons';
import { useCart } from '../../hooks/cart';
import colors from '../../utils/colors';

import PilgrimLogo from './../../assets/pilgrin_logo.png';

import {HeaderContent,
        LogoImage,
        ProductsInCartNumber} from './styles';

export default function Header(){
    const { productsInCart } = useCart();

    return(
        <HeaderContent>
            <LogoImage
                source={PilgrimLogo}
            />

            <TouchableOpacity activeOpacity={0.8}>
                <Icon name={productsInCart.length >= 1 ? 'cart' : "cart-outline"} size={24} color={colors.primary}/>

                <ProductsInCartNumber>{productsInCart.length}</ProductsInCartNumber>
            </TouchableOpacity>
        </HeaderContent>
    );
}