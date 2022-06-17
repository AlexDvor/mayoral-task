import { SelectBox, OptionItem } from './Filter-price.styled';

const FilterPrice = () => {
  return (
    <>
      <SelectBox>
        <OptionItem value="hide">--Ordenar precio--</OptionItem>
        <OptionItem value="ascending">Precio ascendente</OptionItem>
        <OptionItem value="descending">Precio descendente</OptionItem>
      </SelectBox>
    </>
  );
};

export default FilterPrice;
