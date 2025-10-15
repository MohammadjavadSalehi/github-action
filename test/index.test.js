const add = require("../index");
test("adds 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});
test("adds 4 + 6 = 10", () => {
  expect(add(4, 6)).toBe(10);
});
