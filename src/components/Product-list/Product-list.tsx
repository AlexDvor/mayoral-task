import Image from 'next/image';
import {
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
      <List>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
        <Item>
          <WrapperImg>
            <Image src={im} alt="Picture of the author" />
          </WrapperImg>
          <WrapperInfo>
            <Title>Polo manga corta ECOFRIENDS</Title>
            <Price>25.30</Price>
            <DiscountPrice>10.99</DiscountPrice>
            <ColorButton type="button">mas colores</ColorButton>
            <AddButton type="button">Añadir</AddButton>
          </WrapperInfo>
        </Item>
        {/*  */}
      </List>
    </>
  );
};

export default ProductList;
