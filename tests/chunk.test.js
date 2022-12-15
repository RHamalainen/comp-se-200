import chunk from "../src/chunk";

test("chunk array to arrays with given size", () => { expect(chunk(["a", "b", "c", "d"], 2)).toBe([["a", "b"], ["c", "d"]]); });
test("chunk array to arrays with given size", () => { expect(chunk(["a", "b", "c", "d"], 3)).toBe([["a", "b", "c"], ["d"]]); });
