import defaultTo from "../src/defaultTo";

// TODO: more tests

test("maybe replace with default value", () => { expect(defaultTo(1, 10)).toBe(1); });
test("maybe replace with default value", () => { expect(defaultTo(undefined, 10)).toBe(10); });
