import { NextPage } from 'next';
import { OptionsWrapper } from './index.styled';
import DB from '../../data/products.json';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';
import SearchBar from 'components/Search-bar/Search-bar';
import FilterPrice from 'components/Filter-price/Filter-price';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const [productsData, setProductsData] = useState(DB);

  const filteredProductByName = (data) => {
    setProductsData(data);
  };

  return (
    <>
      <Container>
        <OptionsWrapper>
          <FilterPrice></FilterPrice>
          <SearchBar filter={filteredProductByName} data={productsData}></SearchBar>
        </OptionsWrapper>
        <ProductList data={productsData}></ProductList>
      </Container>
    </>
  );
};

export default HomePage;
