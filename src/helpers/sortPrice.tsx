import { TProducts } from '../../types';

const sortPriceByAscending = (data: TProducts[]): TProducts[] => {
  const sortedData = data.sort((a: { price: number }, b: { price: number }) => a.price - b.price);

  return [...sortedData];
};

const sortPriceByDescending = (data: TProducts[]): TProducts[] => {
  const sortedData = data.sort((a: { price: number }, b: { price: number }) => b.price - a.price);

  return [...sortedData];
};

export { sortPriceByAscending, sortPriceByDescending };
