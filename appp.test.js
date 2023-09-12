const { add } = require('./appp');
const { subtract }=require('./subract');
const {  capitalize,reverse}=require('./string');
const {sumArray, findMax}=require('./array');

test('add', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(5,5)).toBe(10);
  expect(add(0,0)).toBe(0);
  expect(add(-2,-3)).toBe(-5);
});

test('subtraction', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(1, 5)).toBe(-4);
  expect(subtract(10,9)).toBe(1);
  expect(subtract(5,5)).toBe(0);
  expect(subtract(-1,1)).toBe(-2);
});

test('capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Hello")).toBe("Hello");
});

test('reverse',() =>{
    expect(reverse('HELLO')).toBe('OLLEH');
    expect(reverse("Sachin")).toBe("nihcaS");
});

test('sumArray',() =>{
    expect(sumArray([11,2,3,6,7])).toBe(29);
    expect(sumArray([])).toBe(0);

});

test('findMax',() =>{
    expect(findMax([10,7,4,2,1])).toBe(10);
    expect(findMax([-1,-7,-111])).toBe(-1);
});
