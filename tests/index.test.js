let { repeatMessage } = require("../source/index");

test("Name of an example test", () => {
  expect("this is a truthy string").toBeTruthy();
});

test("Name of an example test", () => {
  expect(repeatMessage("hello", 4)).not.toEqual("hellohellohello");
});

test("Repeat message is a function.", () => {
  expect(typeof repeatMessage).toBe("function");
});

describe("repeatMessage functionality", () => {
  test("repeatMessage is a function.", () => {
    expect(typeof repeatMessage).toBe("function");
  });
  test("If given 'hello' and 3 as inputs, repeatMessage will return 'hellohellohello'.", () => {
    expect(repeatMessage("hello", 3)).toEqual("hellohellohello");
  });
});
