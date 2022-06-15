import { NextPage } from 'next';
import Container from 'components/Container/Container';
import ProductList from 'components/Product-list/Product-list';

const HomePage: NextPage = () => {
  return (
    <>
      <Container>
        <ProductList></ProductList>
      </Container>
    </>
  );
};

export default HomePage;
