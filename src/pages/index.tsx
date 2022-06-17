import { NextPage } from 'next';
import { OptionsWrapper } from './index.styled';
import DB from '../../data/products.json';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';
import SearchBar from 'components/Search-bar/Search-bar';
import FilterPrice from 'components/Filter-price/Filter-price';

const HomePage: NextPage = () => {
  return (
    <>
      <Container>
        <OptionsWrapper>
          <FilterPrice></FilterPrice>
          <SearchBar></SearchBar>
        </OptionsWrapper>
        <ProductList data={DB}></ProductList>
      </Container>
    </>
  );
};

export default HomePage;
