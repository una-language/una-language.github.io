---
id: syntax_symmetry_error
title: Error Arrows
---

#### Right arrow of error symmetry

Right error arrow `|->` is try-catch operator. First parameter is catch function. Other parameters are try lines. Unlike JavaScript `try-catch` operator `|->` in Una always returns some value and it doesn't have `finally` block.

```
|->
  <-
    = getName null
    getName ()
  -> error
    console.log error
    'John'
```

If you need to run async code in try catch user `<--` instead of `<-` in try or `-->` instead `->` in catch:

```
|->
  <--
    getNameAsync ()
  --> error
    console.log error
    "John"
```

#### Left arrow of error symmetry

Left error arrow `<-|` is throwing error.

```
= addOneToNumber -> number
  ?! (isNaN number)
    <-| "number is not valid"
  + number 1
```