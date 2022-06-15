import Image from 'next/image';
import { FC } from 'react';
import { TProducts } from '../../../types';
import { useState } from 'react';
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
  const [productList, setProductList] = useState(data);

  const checkPrice = (price) => {
    const text = price.toString();
    const converted = text.replace(/\./g, ',');
    return converted;
  };

  const checkDiscount = (price) => {
    const discountPrice = price === 0;
    return discountPrice ? true : false;
  };

  function countPriceWithDiscount(price, discount) {
    if (discount === 0) {
      return price;
    } else {
      const newPrice = price * ((100 - discount) / 100);
      return newPrice.toFixed(2);
    }
  }

  return (
    <>
      <Wrapper>
        <List>
          {productList.map((item) => (
            <Item key={item.id}>
              <WrapperImg>
                <Image src={item.image} alt={item.name} width="425" height="595"></Image>
              </WrapperImg>
              <WrapperInfo>
                <Title>{item.name}</Title>
                <InfoPrice>
                  <Price hasDiscount={checkDiscount(item.discount)}>
                    {checkPrice(item.price)} &#8364;
                  </Price>
                  <DiscountPrice hasDiscount={checkDiscount(item.discount)}>
                    {item.discount} &#8364;
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
