import React, { useState } from 'react';
import { SelectBox, OptionItem } from './Filter-price.styled';
import { TProducts } from '../../../types';
import { sortPriceByAscending, sortPriceByDescending } from 'helpers/sortPrice';

type Props = {
  data: TProducts[];
  filter: (newData: TProducts[]) => void;
};

const FilterPrice = ({ data, filter }: Props) => {
  const [products, setProducts] = useState(data);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case 'hide':
        filter(products);
        break;
      case 'ascending':
        filter(sortPriceByAscending(products));
        break;
      case 'descending':
        filter(sortPriceByDescending(products));
        break;
    }
  };

  return (
    <>
      <SelectBox onChange={handleChange}>
        <OptionItem value="hide">--Ordenar precio--</OptionItem>
        <OptionItem value="ascending">Precio ascendente</OptionItem>
        <OptionItem value="descending">Precio descendente</OptionItem>
      </SelectBox>
    </>
  );
};

export default FilterPrice;
