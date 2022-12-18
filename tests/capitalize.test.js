import capitalize from "../src/capitalize";

test("capitalize string", () => { expect(capitalize("abcd")).toBe("Abcd"); });
test("capitalize string", () => { expect(capitalize("ABCD")).toBe("Abcd"); });
test("capitalize string", () => { expect(capitalize("AbCd")).toBe("Abcd"); });
test("capitalize string", () => { expect(capitalize("abcd abcd")).toBe("Abcd abcd"); });
test("capitalize string", () => { expect(capitalize("ABCD ABCD")).toBe("Abcd abcd"); });
test("capitalize string", () => { expect(capitalize("AbCd AbCd")).toBe("Abcd abcd"); });
test("capitalize string", () => { expect(capitalize(NaN)).toBe(undefined); });
test("capitalize string", () => { expect(capitalize(Object())).toBe(undefined); });
test("capitalize string", () => { expect(capitalize([])).toBe(undefined); });
