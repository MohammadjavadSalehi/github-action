const add = require("../index");
test("adds 4 + 8 = 12", () => {
  expect(add(4, 8)).toBe(12);
});
test("adds 4 + 6 = 10", () => {
  expect(add(4, 6)).toBe(10);
});
