import { applyDiscount } from 'pure';

describe('Test', () => {
  it('add', () => {
    expect(applyDiscount(100, 20)).toBe(80);
  });
});
