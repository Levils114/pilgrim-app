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

import { IProduct } from './../../@types/product';

interface IParams {
  route: {
    params: {
      product: IProduct;
    };
  };
}

export default function Product({route}: IParams) {
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
              Piper, John Newton e Tim??teo t??m em comum? Poderia ser piedade,
              teologia ou impacto em sua gera????o, mas a verdade ?? que todos eles
              tinham m??es piedosas que intercediam por eles. Essas mulheres, por
              mais que fossem ??timas te??logas, muitas vezes foram apenas ouvidas
              por seus filhos. Inclui relatos de m??es solteiras,
              rec??m-convertidas ou mulheres casadas com um incr??dulo, guiando
              m??es que desejam criar seus filhos para a honra e gl??ria de Deus
              na pr??tica, aprendendo da melhor forma a obra de Deus na vida de
              m??es e filhos ao longo dos s??culos.
            </Description>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Content>
  );
}
