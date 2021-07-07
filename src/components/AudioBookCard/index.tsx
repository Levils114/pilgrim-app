import {useNavigation} from '@react-navigation/native';
import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {BookCard, BookAuthor, BookTitle} from './styles';

interface IAudioBookCard {
  product: {
    id: number;
    title: string;
    cover_path: string;
    author: string;
    publisher: string;
    format_type: string;
  };
}

export default function AudioBookCard({product}: IAudioBookCard) {
  const navigator = useNavigation();

  const formatTitle = useMemo(() => {
    if (product.title.length >= 25) {
      return `${product.title.substring(0, 25)}...`;
    }

    return product.title;
  }, [product]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigator.navigate('Product', {product})}>
      <BookCard
        source={{uri: product.cover_path}}
        imageStyle={{
          borderRadius: 16,
        }}>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.5)']}
          style={{
            padding: 12,
            flex: 1,
            justifyContent: 'flex-end',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}>
          <BookAuthor>{product.author}</BookAuthor>
          <BookTitle>{formatTitle}</BookTitle>
        </LinearGradient>
      </BookCard>
    </TouchableOpacity>
  );
}
