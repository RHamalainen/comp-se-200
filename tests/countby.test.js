import countBy from "../src/countBy";

const users = [
    {"x": "a", "y": true},
    {"x": "b", "y": true},
    {"x": "c", "y": false},
];

test("count objects using predicate", () => { expect(countBy(users, value => value.y)).toBe({"true": 2, "false": 1}); });
