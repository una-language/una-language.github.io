---
id: syntax_comparison
title: Comparison operators
---

Una has all basic comparison operators that work the same as in JavaScript:

-   `==` - strictly equals (like `===` in JavaScript)
-   `!=` - not strictly equals (like `!==` in JavaScript)
-   `~=` - not nonstrictly equals (like `==` in JavaScript)
-   `!~=` - not nonstrictly equals (like `!=` in JavaScript)
-   `>` - greater
-   `>=` - greater or equals
-   `<` - less
-   `<=` - less or equals

Example:

```
= a (== 1 1)
= b (~= 1 '1')
= c (!= 1 '1')
= d (!~= 1 '2')
= e (> 2 1)
= f (>= 2 1)
= g (< 1 2)
= h (<= 1 2)
```