const queryNormalize = (query: string): string => {
  return query
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export default queryNormalize;
