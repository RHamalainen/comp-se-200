import clamp from "../src/clamp";

test("clamp number to bounds", () => { expect(clamp(-10, -5, 5)).toBe(-5); });
test("clamp number to bounds", () => { expect(clamp(10, -5, 5)).toBe(5); });
