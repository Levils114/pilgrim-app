import React from "react";
import { ImageBackground, View } from 'react-native';
import {Content,
        Author,
        Title,
        ProductDataContainer,
        ProductDataContent,
        ProductDataLabel,
        Description,
        AddCartButton,
        AddCartButtonText} from "./styles";

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import colors from "../../utils/colors";
import LinearGradient from "react-native-linear-gradient";

import HeaderToProductScreen from './../../components/HeaderToProductScreen';

interface IProduct{
    route: {
        params: {
            product: {
                id: number;
                title: string;
                cover_path: string;
                author: string;
                publisher: string;
                format_type: string;
            }
        }
    }
}

export default function Product({route}: IProduct){
    const { product } = route.params;

    return(
        <Content 
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={{ uri: product.cover_path }}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}
            >
                <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 1)']} style={{
                    height: 750,
                    flex: 1,
                    justifyContent: 'flex-start',
                }}>
                    <HeaderToProductScreen 
                        product={product}
                    />

                    <View style={{
                        flex: 1,
                        paddingHorizontal: 24,
                        paddingVertical: 12
                    }}>
                        <Author>{product.author}</Author>
                        <Title>{product.title}</Title>

                        <ProductDataContainer>
                            <ProductDataContent>
                                <MaterialIcon name="currency-usd" size={18} color={colors.white}/>

                                <ProductDataLabel>R$ 12,25</ProductDataLabel>
                            </ProductDataContent>

                            <ProductDataContent>
                                <OcticonsIcon name="device-mobile" size={18} color={colors.white}/>

                                <ProductDataLabel>{product.format_type[0].toLocaleUpperCase() + product.format_type.substring(1, product.format_type.length)}</ProductDataLabel>
                            </ProductDataContent>

                            <ProductDataContent>
                                <IoniconsIcon name="book-outline" size={18} color={colors.white}/>

                                <ProductDataLabel>{product.publisher}</ProductDataLabel>
                            </ProductDataContent>
                        </ProductDataContainer>
                        
                        <Description>
                            Em Forest Hills, Queens, Nova York, o estudante de ensino médio, Peter Parker, é um cientista orfão que vive com seu tio Ben e tia May. Ele é mordido por uma aranha radioativa em uma exposição científica e adquire a agilidade e a força proporcional de um aracnídeo. Junto com a super força, Parker ganha a capacidade de andar nas paredes e tetos.

                            Através de sua habilidade nativa para a ciência, ele desenvolve um aparelho que o permitir lançar teias artificiais. Inicialmente buscando capitalizar suas novas habilidades, Parker cria um traje e, como Homem Aranha, torna-se uma estrela de televisão.
                        </Description>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </Content>
    );
}