import Image from 'next/image';
import { TProducts } from '../../../types';
import { getShowPrice } from 'helpers/getDiscountPrice';
import convertedPrice from 'helpers/convertedPrice';
import checkDiscount from 'helpers/checkDiscount';
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

const ProductList = ({ data }: Props) => {
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
                    {getShowPrice(item.price, item.discount)}
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
