---
id: syntax_application
title: Application Order
---

The most important thing you should know about Una is how application order works.
You can set the application order in two different ways:

-   wrap up expression with parentheses
-   move expression to the next line with additional indentation

Let's look at the example. We won't use real operators, just letters.
Here we apply `a` to `b`:

```
a b
```

Here we apply `a` to the result of application of `b` to `c`:

```
a (b c)
```

This expression we can also write using indentation:

```
a
  b c
```

I think the underlying idea is pretty obvious but let's look at more complicated example:

```
a (b (c d)) (e (f g))
```

It can be written like this:

```
a
  b (c d)
  e (f g)
```

or even like this:

```
a
  b
    c d
  e
    f g
```
