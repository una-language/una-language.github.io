---
id: syntax_assignment
title: Assignment
---

The most used operator in any programming language is assignment `=`. Because of Una is pure functional language `=` is not really assignment but only declaration of a constant.

```
= name 'John'
```

This operator takes its second parameter and assigns it to the first one. If there're more parameters, at first it applies the second parameter to the rest of them and then assigns the result to the first one. Sounds complicated but it's simple. It just means that we can write assigning expression with parantheses:

```
= z (calculate x y)
```

Or the same with indentation:

```
= z
  calculate x y
```

Or we can write it much simplier without parantheses:

```
= z calculate x y
```

Or even like this:

```
= z calculate
  x
  y
```