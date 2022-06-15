import convertedPrice from './convertedPrice';

const getDiscountPrice = (price: number, discount: number): string => {
  if (discount === 0) {
    return price.toString();
  } else {
    const newPrice = price * ((100 - discount) / 100);
    const fixedPrice = newPrice.toFixed(2);
    const unicode = String.fromCharCode(8364);
    const result = convertedPrice(fixedPrice);
    return `${result} ${unicode} (-${discount}%)`;
  }
};

export default getDiscountPrice;
