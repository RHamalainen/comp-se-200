import words from "../src/words";

test("split string to words", () => { expect(words("a b c d")).toStrictEqual(["a", "b", "c", "d"]); });
test("split string to words", () => { expect(words("ab cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab  cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab, cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab. cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab: cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab; cd")).toStrictEqual(["ab", "cd"]); });
test("split string to words", () => { expect(words("ab-cd")).toStrictEqual(["ab", "cd"]); });
