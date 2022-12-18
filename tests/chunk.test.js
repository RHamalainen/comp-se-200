import chunk from "../src/chunk";

test("chunk array to arrays with given size", () => { expect(chunk(["a", "b", "c", "d"], 2)).toStrictEqual([["a", "b"], ["c", "d"]]); });
test("chunk array to arrays with given size", () => { expect(chunk(["a", "b", "c", "d"], 3)).toStrictEqual([["a", "b", "c"], ["d"]]); });
test("chunk array to arrays with given size", () => { expect(chunk([], 2)).toStrictEqual([]); });
test("chunk array to arrays with given size", () => { expect(chunk(undefined, 2)).toStrictEqual(undefined); });
