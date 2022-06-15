import Image from 'next/image';
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
} from './Product-list.styled';
import im from '../../../public/images/im.jpg';

const ProductList = () => {
  return (
    <>
      <Wrapper>
        <List>
          <Item>
            <WrapperImg>
              <Image
                src={im}
                alt="Picture of the author"
                // width={500}
                // height={500}

                // blurDataURL="data:..." automatically provided
                // placeholder="blur" // Optional blur-up while loading
              />
            </WrapperImg>
            <WrapperInfo>
              <Title>Polo manga corta ECOFRIENDS</Title>
              <Price>25.30</Price>
              <DiscountPrice>10.99</DiscountPrice>
              <ColorButton type="button"> + Mas colores</ColorButton>
              <AddButton type="button">Añadir</AddButton>
            </WrapperInfo>
          </Item>
        </List>
      </Wrapper>
    </>
  );
};

export default ProductList;
