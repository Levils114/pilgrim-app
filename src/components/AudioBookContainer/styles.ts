import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IProduct} from '../../@types/product';

export const AudioBooksContainer = styled(
  FlatList as new () => FlatList<IProduct>,
)`
  padding: 0 24px;

  margin-bottom: 24px;
`;
