const convertedPrice = (price: number | string): string => {
  const text = price.toString();
  const converted = text.replace(/\./g, ',');
  return converted;
};

export default convertedPrice;
