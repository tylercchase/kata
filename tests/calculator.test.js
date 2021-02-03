const calculator = require('../calculator');

test('Empty String returns 0', () => {
  expect(calculator('')).toBe(0);
});
test('Single number should return value', () => {
  expect(calculator('1')).toBe(1);
  expect(calculator('2')).toBe(2);
  expect(calculator('100')).toBe(100);
});
test('Two numbers, comma delimited, returns the sum', () => {
  expect(calculator('1,2')).toBe(3);
  expect(calculator('2,2')).toBe(4);
  expect(calculator('50,50')).toBe(100);
});
test('Two numbers, newline delimited, returns the sum', () => {
  expect(calculator(`1
  1`)).toBe(2);
  expect(calculator(`2
  2`)).toBe(4);
  expect(calculator(`50
  50`)).toBe(100);
});
test('Three numbers, delimited either way, returns the sum', () => {
  expect(calculator(`1,1
  1`)).toBe(3);
  expect(calculator(`5
  1
  1`)).toBe(7);
  expect(calculator(`33
  33
  33`)).toBe(99);
});
test('Negative numbers should throw an exception', () => {
  expect(()=>calculator('-1')).toThrow('No negative numbers allowed');
  expect(()=>calculator('50,3,-5')).toThrow('No negative numbers allowed');
  expect(()=>calculator('3,-4,5')).toThrow('No negative numbers allowed');
});
test('Numbers greater than 1000 should be ignored', () => {
  expect(calculator('1,1001')).toBe(1);
  expect(calculator('1,999')).toBe(1000);
  expect(calculator('1,1000')).toBe(1001);
  expect(calculator('1,100')).toBe(101);
  expect(calculator('10001,100')).toBe(100);
  expect(calculator('10001,1001')).toBe(0);
});
test('Single character defined on first line as delimiter', () => {
  expect(calculator(`//#
  1#1`)).toBe(2);
  expect(calculator(`//a
  1a1,1`)).toBe(3);
  expect(calculator(`//:
  10:10`)).toBe(20);
  expect(calculator(`//&
  10&10`)).toBe(20);
});
test('Multi char delimiter', () => {
  expect(calculator(`//[###]
  1###1`)).toBe(2);
});