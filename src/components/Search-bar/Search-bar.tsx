import { WrapperInput, Input, SearchIcon, Wrapper } from './Search-bar.styled';
import { useState } from 'react';
import queryNormalize from 'helpers/queryNormalize';

const SearchBar = ({ data, filter }) => {
  const [products, setProducts] = useState(data);

  const handleChange = (event) => {
    const value = event.target.value;
    filteredData(value);
  };

  const filteredData = (itemName: string) => {
    const articleName = queryNormalize(itemName);
    const filteredData = products.filter((item) => queryNormalize(item.name).includes(articleName));
    console.log('🚀 - filteredData', filteredData);
    filter(filteredData);
  };

  return (
    <>
      <Wrapper>
        <WrapperInput>
          <Input type="search" placeholder="Buscar" onChange={handleChange}></Input>
          <SearchIcon></SearchIcon>
        </WrapperInput>
      </Wrapper>
    </>
  );
};

export default SearchBar;
