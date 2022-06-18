import Image from 'next/image';
import { FC } from 'react';
import { TProducts } from '../../../types';
import convertedPrice from 'helpers/convertedPrice';
import getDiscountPrice from 'helpers/getDiscountPrice';
import checkDiscount from 'helpers/chechDiscount';
import {
  Wrapper,
  List,
  Item,
  WrapperImg,
  Title,
  Price,
  DiscountPrice,
  AddButton,
  ColorButton,
  WrapperInfo,
  InfoPrice,
} from './Product-list.styled';

type Props = {
  data: TProducts[];
};

const ProductList: FC<Props> = ({ data }) => {
  return (
    <>
      <Wrapper>
        <List>
          {data.map((item) => (
            <Item key={item.id}>
              <WrapperImg>
                <Image src={item.image} alt={item.name} width="425" height="595"></Image>
              </WrapperImg>
              <WrapperInfo>
                <Title>{item.name}</Title>
                <InfoPrice>
                  <Price hasDiscount={checkDiscount(item.discount)}>
                    {convertedPrice(item.price)} &#8364;
                  </Price>
                  <DiscountPrice hasDiscount={checkDiscount(item.discount)}>
                    {getDiscountPrice(item.price, item.discount)}
                  </DiscountPrice>
                </InfoPrice>
                <ColorButton type="button">mas colores</ColorButton>
                <AddButton type="button">Añadir</AddButton>
              </WrapperInfo>
            </Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default ProductList;
