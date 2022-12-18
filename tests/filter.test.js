import filter from "../src/filter";

const active_users = [
    {"user": "a", "active": true},
    {"user": "b", "active": true},
]

const inactive_users = [
    {"user": "c", "active": false},
]

const users = active_users.concat(inactive_users)

test("filter array elements with predicate", () => { expect(filter(users, ({active}) => active)).toStrictEqual(active_users); });
test("filter array elements with predicate", () => { expect(filter(users, ({active}) => !active)).toStrictEqual(inactive_users); });
test("filter array elements with predicate", () => { expect(filter(users, ({user}) => user === "d")).toStrictEqual([]); });
