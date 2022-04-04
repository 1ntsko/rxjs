"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// 1.
const a$ = (0, rxjs_1.of)(1, "aa", 3);
const b$ = (0, rxjs_1.of)(4, 5, "bb");
const c$ = (0, rxjs_1.merge)(a$, b$).pipe((0, rxjs_1.map)((x) => {
    if (typeof x === "string")
        return (x += x);
    return x * 10;
}));
// c$.subscribe((x) => console.log(x));
// 2.
const test = (0, rxjs_1.interval)(1000).pipe((0, rxjs_1.filter)((x) => x % 2 === 0), (0, rxjs_1.map)((x) => x * 2));
test.subscribe((x) => console.log(x));
const users = [
    {
        firstName: "Lasha",
        lastName: "Intskirveli",
        age: 21,
    },
    {
        firstName: "Giorgi",
        lastName: "Intskirveli",
        age: 17,
    },
];
function getUsers() {
    return (0, rxjs_1.of)(users).pipe((0, rxjs_1.delay)(5000));
}
getUsers().pipe((0, rxjs_1.map)((users) => users.filter((user) => user.age > 17)), (0, rxjs_1.map)((users) => users.map((user) => `${user.firstName} ${user.lastName} is ${user.age} years old`)));
// .subscribe(console.log);
