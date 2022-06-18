import { useState } from 'react';
import { WrapperInput, Input, SearchIcon, Wrapper } from './Search-bar.styled';
import queryNormalize from 'helpers/queryNormalize';

const SearchBar = ({ data, filter }) => {
  const [products, setProducts] = useState(data);

  const handleChange = (event) => {
    const value = event.target.value;
    filteredData(value);
  };

  const filteredData = (itemName: string): void => {
    const articleName = queryNormalize(itemName);
    const filteredData = products.filter((item) => queryNormalize(item.name).includes(articleName));
    filter(filteredData);
  };

  return (
    <>
      <Wrapper>
        <WrapperInput>
          <Input type="text" placeholder="Buscar" onChange={handleChange}></Input>
          <SearchIcon></SearchIcon>
        </WrapperInput>
      </Wrapper>
    </>
  );
};

export default SearchBar;
