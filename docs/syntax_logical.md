---
id: syntax_logical
title: Logical operators
---

Una has all basic logical operators. But unlike JS single characters are used for `and` and `or`. 

-   `&` - and
-   `|` - or
-   `!` - not

Example:

```
= a (& true false)
= b (| true false)
= c (! true)
```

`&` and `|` operators can get any amount of parameters:

```
= a (& b c true)
= d (| e f false)
```

`!` operator can be written even simpler:

```
= a !b
```