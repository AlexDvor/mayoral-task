import { NextPage } from 'next';
import DB from '../../data/products.json';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';
import SearchBar from 'components/Search-bar/Search-bar';

const HomePage: NextPage = () => {
  return (
    <>
      <Container>
        <SearchBar></SearchBar>
        <ProductList data={DB}></ProductList>
      </Container>
    </>
  );
};

export default HomePage;
