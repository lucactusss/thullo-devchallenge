import { isNumber } from '../../src/utils/number.utils';

describe('isNumber Utils', () => {
  it('It is a number', () => {
    [0, 1, 2, -1, 1.345e17, '1'].forEach((n) => {
      expect(isNumber(n as string)).toEqual(true);
    });
  });
});
