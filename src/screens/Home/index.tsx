import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';

import Header from '../../components/Header';
import AudioBookContainer from '../../components/AudioBookContainer';

import {
  WelcomeText,
  Title,
  CategoryContainer,
  CategoryText,
  CrownIcon,
} from './styles';

import api from '../../services/api';
import colors from '../../utils/colors';

import {ICategories} from '../../@types/categories';

export default function Home() {
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [pilgrimCategory, setPilgrimCategory] = useState({} as ICategories);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('/categories');

      setCategories(
        response.data.filter(
          (data: ICategories) => data.title !== 'Pilgrim Books',
        ),
      );
      setPilgrimCategory(
        response.data.find(
          (data: ICategories) => data.title === 'Pilgrim Books',
        ),
      );
    }

    loadApi();
  }, []);

  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={
        <>
          <Header />

          <WelcomeText>Bem vindo ao The Pilgrim</WelcomeText>
          <Title>Escolha o seu Livro, Peregrino</Title>

          {Object.keys(pilgrimCategory).length >= 1 && (
            <>
              <CategoryContainer>
                <CategoryText title={pilgrimCategory.title}>
                  {pilgrimCategory.title}
                </CategoryText>

                <CrownIcon name="crown" size={18} color={colors.gold} />
              </CategoryContainer>
              <AudioBookContainer category={pilgrimCategory} />
            </>
          )}
        </>
      }
      renderItem={({item}) => (
        <View key={item.id}>
          <CategoryText title={item.title}>{item.title}</CategoryText>
          <AudioBookContainer category={item} />
        </View>
      )}
    />
  );
}
