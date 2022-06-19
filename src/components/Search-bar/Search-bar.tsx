import React, { useState } from 'react';
import { WrapperInput, Input, SearchIcon, Wrapper } from './Search-bar.styled';
import { TProducts } from '../../../types';
import queryNormalize from 'helpers/queryNormalize';

type Props = {
  data: TProducts[];
  filter: (newData: TProducts[]) => void;
};

const SearchBar = ({ data, filter }: Props) => {
  const [products] = useState(data);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
