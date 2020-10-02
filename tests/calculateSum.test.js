let { calculateSum } = require("../source/calculateSum");

describe("calculateSum functionality", () => {
  test("calculateSum accepts an array of numbers as an argument", () => {
    //syntax for expect incase of throwing errors

    expect(() => {
      calculateSum([1, 2, 3, 4]);
    }).not.toThrow();

    expect(() => {
      calculateSum(["hello"]);
    }).toThrow();

    expect(() => {
      calculateSum([1, 2], 1, 2, [1, 2]);
    }).not.toThrow();

    expect(() => {
      calculateSum([1, "2", 2, "3"]);
    }).toThrow();
  });

  test("calculateSum returns correct sum based on provided inputs.", () => {
    expect(calculateSum([1, 2, 3, 4, 5])).toEqual(15);

    expect(calculateSum([1.5, 2.5, 3.5])).toEqual(7.5);
  });
});
