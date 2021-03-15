---
id: syntax_string_interpolation
title: String interpolation
---

Operator `\`` is used for string interpolation. Look at this example:

```
= name 'John'
= count 5
= fruit 'apples'

= text `
  'Hello, ${0}' name
  'I have ${0} ${1}'
    count
    fruit

console.log text
```

This code will print:

```
Hello, John
I have 5 apples
```

Also you can pass special interpolation function as first argument. For example, as in `styled-components`:

```
= Container `
  styled.div
  'background-color: ${0};'
    -> ((: theme)) theme.colors.red
```
