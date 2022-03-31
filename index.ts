import { filter, interval, map, merge, of, delay, Observable } from "rxjs";

// 1.
const a$ = of(1, "aa", 3);
const b$ = of(4, 5, "bb");

const c$ = merge(a$, b$).pipe(
    map((x: string | number) => {
        if (typeof x === "string") return (x += x);
        return x * 10;
    })
);
c$.subscribe((x) => console.log(x));

// 2.
const test = interval(1000).pipe(filter((x: number) => x % 2 === 0));
test.subscribe((x) => console.log(x));

// 3.
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

const users: User[] = [
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

function getUsers(): Observable<User[]> {
    const obs$ = of(users).pipe(delay(5000));

    obs$.subscribe(() => {
        for (const user of users) {
            if (user.age > 18)
                return `${user.firstName} ${user.lastName}, ${user.age} years old`;
        }
    });

    return obs$;
}
getUsers();
