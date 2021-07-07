import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const BookCard = styled.ImageBackground`
  flex: 1;
  width: 170px;
  height: 260px;
  border-radius: 16px;
  margin-right: 8px;
  justify-content: flex-end;
`;

export const BookAuthor = styled.Text`
  color: ${colors.white};

  font-size: 12px;
  font-weight: 500;
`;

export const BookTitle = styled.Text`
  color: ${colors.white};

  font-size: 20px;
  font-weight: bold;
`;
