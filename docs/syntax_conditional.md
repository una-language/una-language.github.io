---
id: syntax_conditional
title: Conditional operators
---

Una has two conditional operators:

-   `?` - ternary condtion
-   `?!` - condition with return

Ternary conditional operator works just like in JavaScript:

```
= value
  ? (> 2 1) "Greater" "Less"
```

You can use this operator with only 2 parameters, in that case the third one will always be undefined:

```
? (== value 0)
  <- (console.log 'Zero!')

? (> value 10)
  <- (console.log "Greater")
  <- (console.log "Less")
```

Returnable conditional operator `?!` is used in sync/async functions and sync/async computations to return value by some condition. For example, following code in function will return `"One"` if `number` equals `1`:

```
?! (== number 1) "One"
```

This operator can have multiline returnable block:

```
?! (== number 1)
  = a 1
  = b 2
  + a b
```

Operator `?!` can't be used as the last or single operator of any block. The folling example shows _wrong_ usage.

```
= func -> ()
  ?! (> 2 1) 'A'

= value <-
  ?! (> 2 1) 'B'
```

This code won't work