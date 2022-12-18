import defaultTo from "../src/defaultTo";

test("maybe replace with default value", () => { expect(defaultTo(1, 10)).toBe(1); });
test("maybe replace with default value", () => { expect(defaultTo(NaN, 10)).toBe(10); });
test("maybe replace with default value", () => { expect(defaultTo(null, 10)).toBe(10); });
test("maybe replace with default value", () => { expect(defaultTo(undefined, 10)).toBe(10); });
test("maybe replace with default value", () => { expect(defaultTo([], 10)).toStrictEqual([]); });
test("maybe replace with default value", () => { expect(defaultTo({}, 10)).toStrictEqual({}); });
test("maybe replace with default value", () => { expect(defaultTo(Object(), 10)).toStrictEqual(Object()); });
