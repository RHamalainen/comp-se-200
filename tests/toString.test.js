import toString from "../src/toString";

test("convert value to string", () => { expect(toString(null)).toBe("") });
test("convert value to string", () => { expect(toString(-0)).toBe("-0") });
test("convert value to string", () => { expect(toString([1, 2, 3])).toBe("1,2,3") });
