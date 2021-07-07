import React from 'react';
import {ImageBackground, View} from 'react-native';
import {
  Content,
  Author,
  Title,
  ProductDataContainer,
  ProductDataContent,
  ProductDataLabel,
  Description,
} from './styles';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import colors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

import HeaderToProductScreen from './../../components/HeaderToProductScreen';

interface IProduct {
  route: {
    params: {
      product: {
        id: number;
        title: string;
        cover_path: string;
        author: string;
        publisher: string;
        format_type: string;
      };
    };
  };
}

export default function Product({route}: IProduct) {
  const {product} = route.params;

  return (
    <Content showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{uri: product.cover_path}}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 1)']}
          style={{
            height: 750,
            flex: 1,
            justifyContent: 'flex-start',
          }}>
          <HeaderToProductScreen product={product} />

          <View
            style={{
              flex: 1,
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}>
            <Author>{product.author}</Author>
            <Title>{product.title}</Title>

            <ProductDataContainer>
              <ProductDataContent>
                <MaterialIcon
                  name="currency-usd"
                  size={18}
                  color={colors.white}
                />

                <ProductDataLabel>R$ 12,25</ProductDataLabel>
              </ProductDataContent>

              <ProductDataContent>
                <OcticonsIcon
                  name="device-mobile"
                  size={18}
                  color={colors.white}
                />

                <ProductDataLabel>
                  {product.format_type[0].toLocaleUpperCase() +
                    product.format_type.substring(
                      1,
                      product.format_type.length,
                    )}
                </ProductDataLabel>
              </ProductDataContent>

              <ProductDataContent>
                <IoniconsIcon
                  name="book-outline"
                  size={18}
                  color={colors.white}
                />

                <ProductDataLabel>{product.publisher}</ProductDataLabel>
              </ProductDataContent>
            </ProductDataContainer>

            <Description>
              O que Agostinho, Charles Spurgeon, D.L. Moody, Hudson Taylor, John
              Piper, John Newton e Timóteo têm em comum? Poderia ser piedade,
              teologia ou impacto em sua geração, mas a verdade é que todos eles
              tinham mães piedosas que intercediam por eles. Essas mulheres, por
              mais que fossem ótimas teólogas, muitas vezes foram apenas ouvidas
              por seus filhos. Inclui relatos de mães solteiras,
              recém-convertidas ou mulheres casadas com um incrédulo, guiando
              mães que desejam criar seus filhos para a honra e glória de Deus
              na prática, aprendendo da melhor forma a obra de Deus na vida de
              mães e filhos ao longo dos séculos.
            </Description>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Content>
  );
}
