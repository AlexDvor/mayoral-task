import { useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import { TProducts } from '../../types';
import { OptionsWrapper, SearchErrorMessage } from './index.styled';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';
import SearchBar from 'components/Search-bar/Search-bar';
import FilterPrice from 'components/Filter-price/Filter-price';

type Props = {
  data: TProducts[];
};

const HomePage: NextPage = ({ data }: Props) => {
  const [productsData, setProductsData] = useState(data);

  const filteredData = (newData: TProducts[]): void => {
    setProductsData(newData);
  };

  return (
    <>
      <Container>
        <OptionsWrapper>
          <FilterPrice filter={filteredData} data={productsData}></FilterPrice>
          <SearchBar filter={filteredData} data={productsData}></SearchBar>
        </OptionsWrapper>
        <ProductList data={productsData}></ProductList>
        {productsData.length === 0 && (
          <SearchErrorMessage>
            Lo siento, no hemos encontrado nada, inténtalo otra vez por favor
          </SearchErrorMessage>
        )}
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://next-app-data.herokuapp.com/api/mayoral/products');
  const { data } = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default HomePage;
