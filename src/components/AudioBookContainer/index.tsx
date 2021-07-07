import React from 'react';

import AudioBookCard from '../AudioBookCard';

import {AudioBooksContainer} from './styles';

import {ICategories} from './../../@types/categories';

interface IAudioBookContainer {
  category: ICategories;
}

export default function AudioBookContainer({category}: IAudioBookContainer) {
  return (
    <AudioBooksContainer
      horizontal
      showsHorizontalScrollIndicator={false}
      data={category.products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <AudioBookCard key={item.id} product={item} />}
    />
  );
}
