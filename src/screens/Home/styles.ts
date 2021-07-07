import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../utils/colors';

interface ICategoryText {
  title: string;
}

export const WelcomeText = styled.Text`
  font-size: 14px;
  font-weight: 500;

  color: ${colors.gray_light};

  margin-top: 24px;

  padding-left: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;

  margin-bottom: 32px;

  padding: 0 24px;

  width: 80%;
`;

export const CategoryContainer = styled.View`
  align-items: center;
  justify-content: flex-start;

  flex-direction: row;
`;

export const CrownIcon = styled(Icon)`
  margin-bottom: 12px;

  margin-left: 8px;
`;

export const CategoryText = styled.Text<ICategoryText>`
  color: ${props =>
    props.title === 'Pilgrim Books' ? colors.primary : colors.gray_dark};

  font-size: 18px;
  font-weight: bold;

  margin-bottom: 12px;

  padding-left: 24px;
`;
