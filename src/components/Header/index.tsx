import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';

import PilgrimLogo from './../../assets/pilgrin_logo.png';

import {HeaderContent,
        LogoImage} from './styles';

export default function Header(){
    return(
        <HeaderContent>
            <LogoImage
                source={PilgrimLogo}
            />

            <TouchableOpacity activeOpacity={0.8}>
                <Icon name="cart-outline" size={24} color={colors.primary}/>
            </TouchableOpacity>
        </HeaderContent>
    );
}