const checkDiscount = (price: number): boolean => {
  const discountPrice = price === 0;
  return discountPrice ? true : false;
};

export default checkDiscount;
