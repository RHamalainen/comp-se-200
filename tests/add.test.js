import add from "../src/add";

test("add two numbers", () => { expect(add(1, 1)).toBe(2); });
test("add two numbers", () => { expect(add(-1, 1)).toBe(0); });
test("add two numbers", () => { expect(add(0, 1)).toBe(1); });
test("add two numbers", () => { expect(add(-1, 0)).toBe(-1); });
test("add two numbers", () => { expect(add(Object(), 0)).toBe(NaN); });
test("add two numbers", () => { expect(add([], 0)).toBe(NaN); });
test("add two numbers", () => { expect(add({}, 0)).toBe(NaN); });
