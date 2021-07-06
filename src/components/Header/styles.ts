import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const HeaderContent = styled.View`
    width: 100%;

    align-items: center;
    justify-content: space-between;

    flex-direction: row;

    padding: ${getStatusBarHeight() + 8}px 24px 8px;

    position: relative;
`;

export const LogoImage = styled.Image`
    height: 64px;
    width: 40%;

    resize-mode: contain;
`;

export const ProductsInCartNumber = styled.Text`
    color: ${colors.white};

    padding: 0 4px;

    font-size: 10px;
    font-weight: 400;

    text-align: center;

    border-radius: 24px;

    position: absolute;

    background-color: ${colors.primary};

    top: -2px;
    right: -5px;
`;