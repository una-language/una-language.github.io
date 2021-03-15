---
id: syntax_arithmetical
title: Arithmetical operators

---

Una has all basic arithmetical operators that work the same as in JavaScript:

-   `+` - addition
-   `-` - subtraction
-   `*` - multiplication
-   `/` - division
-   `%` - modulo

Example:

```
= a (+ 1 2)
= b (- 2 1)
= c (* 3 2)
= d (/ 4 2)
= e (% 5 2)
```

All of these operators can get any amount of parameters more than two:

```
= a (+ 1 2 3 4)
```

And `-` can also take one parameter:

```
= a (- 1)
```

But it can be written even simpler:

```
= a -1
```

One more example with the result equals `25`:

```
= a +
  * 2 4
  / 9 3
  + (* 3 2) (/ 4 2)
  *
    + 1 2
    / 6 3
```