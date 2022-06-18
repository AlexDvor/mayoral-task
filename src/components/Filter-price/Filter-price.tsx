import { useState } from 'react';
import { SelectBox, OptionItem } from './Filter-price.styled';
import {
  sortPriceByAscending,
  sortPriceByDescending,
  productWithDiscount,
} from 'helpers/sortPrice';

const FilterPrice = ({ data, filter }) => {
  const [products, setProducts] = useState(data);

  const handleChange = (event) => {
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
      case 'discount':
        filter(productWithDiscount(products));
        break;
    }
  };

  return (
    <>
      <SelectBox onChange={handleChange}>
        <OptionItem value="hide">--Ordenar precio--</OptionItem>
        <OptionItem value="ascending">Precio ascendente</OptionItem>
        <OptionItem value="descending">Precio descendente</OptionItem>
        <OptionItem value="discount">Precio con descuentos</OptionItem>
      </SelectBox>
    </>
  );
};

export default FilterPrice;
