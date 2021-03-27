export const isNumber = (n: string): boolean => {
  return !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
};
