import { TProducts } from '../../types';
import { getDiscountPrice } from './getDiscountPrice';

const sortPriceByAscending = (data: TProducts[]): TProducts[] => {
  const sortedData = data.sort(
    (a: { price: number; discount: number }, b: { price: number; discount: number }) => {
      if (a.discount === 0 && b.discount === 0) return a.price - b.price;
      else if (a.discount !== 0 && b.discount === 0)
        return (
          Number(getDiscountPrice(a.price, a.discount)) -
          Number(getDiscountPrice(b.price, b.discount))
        );
      else if (a.discount === 0 && b.discount !== 0)
        return a.price - Number(getDiscountPrice(b.price, b.discount));
      else if (a.discount !== 0 && b.discount !== 0)
        return (
          Number(getDiscountPrice(a.price, a.discount)) -
          Number(getDiscountPrice(b.price, b.discount))
        );
    },
  );

  return [...sortedData];
};

const sortPriceByDescending = (data: TProducts[]): TProducts[] => {
  const sortedData = data.sort(
    (a: { price: number; discount: number }, b: { price: number; discount: number }) => {
      if (a.discount === 0 && b.discount === 0) return b.price - a.price;
      else if (a.discount !== 0 && b.discount === 0)
        return b.price - Number(getDiscountPrice(a.price, a.discount));
      else if (a.discount === 0 && b.discount !== 0)
        return Number(getDiscountPrice(b.price, b.discount)) - a.price;
      else if (a.discount !== 0 && b.discount !== 0)
        return (
          Number(getDiscountPrice(b.price, b.discount)) -
          Number(getDiscountPrice(a.price, a.discount))
        );
    },
  );

  return [...sortedData];
};
export { sortPriceByAscending, sortPriceByDescending };
