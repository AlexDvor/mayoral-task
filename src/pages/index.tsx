import { useState } from 'react';
import { NextPage } from 'next';
import DB from '../../data/products.json';
import { OptionsWrapper } from './index.styled';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';
import SearchBar from 'components/Search-bar/Search-bar';
import FilterPrice from 'components/Filter-price/Filter-price';

const HomePage: NextPage = () => {
  const [productsData, setProductsData] = useState(DB);

  const filteredData = (newData: []): void => {
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
      </Container>
    </>
  );
};

export default HomePage;
