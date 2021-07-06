/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import AudioBookContainer from '../../components/AudioBookContainer';

import {Content,
        WelcomeText,
        Title,
        CategoryContainer,
        CategoryText,
        CrownIcon} from './styles';

import api from '../../services/api';
import colors from '../../utils/colors';

interface IProduct{
    id: number;
    title: string;
    cover_path: string;
    author: string;
    publisher: string;
    format_type: string;
}

interface ICategories{
    id: number;
    title: string;
    products: IProduct[];
}

export default function Home(){
    const [categories, setCategories] = useState<ICategories[]>([]);
    const [pilgrimCategory, setPilgrimCategory] = useState({} as ICategories);

    useEffect(() => {
        async function loadApi(){
            const response = await api.get('/categories');

            setCategories(response.data.filter(data => data.title !== 'Pilgrim Books'));
            setPilgrimCategory(response.data.find(data => data.title === 'Pilgrim Books'));
        }

        loadApi();
    }, []);

    return(
        <Content showsVerticalScrollIndicator={false}>
            <Header />

            <WelcomeText>Bem vindo ao The Pilgrim</WelcomeText>
            <Title>Escolha o seu AudioBook</Title>

            {Object.keys(pilgrimCategory).length >= 1 && (
                <>
                    <CategoryContainer>
                        <CategoryText title={pilgrimCategory.title}>{pilgrimCategory.title}</CategoryText>

                        <CrownIcon name="crown" size={18} color={colors.gold}/>
                    </CategoryContainer>
                    <AudioBookContainer category={pilgrimCategory}/>
                </>
            )}

            {categories.map(category => (
                <View key={category.id}>
                    <CategoryText title={category.title}>{category.title}</CategoryText>
                    <AudioBookContainer category={category}/>
                </View>
            ))}
        </Content>
    );
}