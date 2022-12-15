import eq from "../src/eq";

const being1 = {"a": 1};
const being2 = {"a": 1};

test("check equivalence", () => { expect(eq(being1, being1)).toBe(true); });
test("check equivalence", () => { expect(eq(being1, being2)).toBe(false); });
test("check equivalence", () => { expect(eq("a", "a")).toBe(true); });
test("check equivalence", () => { expect(eq("a", Object("a"))).toBe(false); });
test("check equivalence", () => { expect(eq(NaN, NaN)).toBe(true); });
