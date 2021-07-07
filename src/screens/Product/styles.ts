import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Content = styled.ScrollView`
  background-color: #000;

  position: relative;
`;

export const Author = styled.Text`
  color: ${colors.white};

  font-size: 16px;
  font-weight: 400;

  margin-top: auto;
`;

export const Title = styled.Text`
  color: ${colors.white};

  font-size: 35px;
  font-weight: 700;

  margin: 8px 0 16px;
`;

export const ProductDataContainer = styled.View`
  align-items: flex-start;
  justify-content: space-around;

  flex-direction: row;

  width: 100%;
`;

export const ProductDataContent = styled.View`
  align-items: center;
  justify-content: center;

  flex-direction: column;

  width: 20%;
`;

export const ProductDataLabel = styled.Text`
  color: ${colors.white};

  font-size: 12px;
  font-weight: 400;

  margin-top: 8px;

  text-align: center;
`;

export const Description = styled.Text`
  color: ${colors.white};

  font-size: 14px;
  font-weight: 400;

  margin: 24px 0 0;
`;
