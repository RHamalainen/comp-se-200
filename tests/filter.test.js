import filter from "../src/filter";

// TODO: more test cases

test("filter array elements with predicate", () => { expect(filter([{"user": "barney", "active": true}, {"user": "fred", "active": false}], ({active}) => active)).toStrictEqual([{"user": "barney", "active": true}]); });
