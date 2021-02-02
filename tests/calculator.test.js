const calculator = require('../calculator');

test('Empty String returns 0', () => {
  expect(calculator('')).toBe(0);
});
