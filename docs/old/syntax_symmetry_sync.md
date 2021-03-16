---
id: syntax_symmetry_sync
title: Sync Arrows
---

#### Right arrow of sync symmetry

Right sync arrow `->` is function. First parameter is function parameters. Last parameter is return of the function. All parameters between are simple code lines.

```
= sum -> (x y)
  + x y

= onePlusTwo -> ()
  = one 1
  = two 2
  + one two
```

If you need to return something before last line you can use returnable conditional operator `?!`:

```
= func -> (x y)
  ?! (== x 0) "Nothing"
  = sum (+ x y)
  ? (> sum 5)
    "Great"
    "Not so great"
```

Calling function is just an application of it to parameters:

```
= a (sum 1 2)
= b sum 1 2
= c
  sum 1 2
= d sum
  1
  2
```

To call parameterless function just use `()`

```
= randomNumber
  Math.random ()
```

These functions can be used as lambda functions and be passed as a parameter to another function or can be returned as value from another function.

#### Left arrow of sync symmetry

Left sync arrow `<-` is immediatly invoked function. So it allows to isolate some part of code and run it.
In following example result immediatly calculates as `3`.

```
= result <-
  = a 1
  = b 2
  + a b
```

It's pretty good when you need to calculate something based on conditions:

```
<-
  ?! (== value 0) "Zero"
  ?! (== value 1) "One"
  ? (< value 10) "Less than ten" "More than ten"
```

Also you can use this operator with conditional operator `?` to make non returnable code:

```
-> number
  ? (== number 0)
    <-
      console.log "Number is zero!"
      console.log "Hooray!"
  + number 1
```