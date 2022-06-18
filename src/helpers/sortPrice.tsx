const sortPriceByAscending = (data: []): [] => {
  const sortedData = data.sort((a: { price: number }, b: { price: number }) => a.price - b.price);

  return [...sortedData];
};

const sortPriceByDescending = (data: []): [] => {
  const sortedData = data.sort((a: { price: number }, b: { price: number }) => b.price - a.price);

  return [...sortedData];
};

const productWithDiscount = (data) => {
  const discountProduct = data.filter((item) => item.discount > 0);
  return discountProduct;
};

export { sortPriceByAscending, sortPriceByDescending, productWithDiscount };
