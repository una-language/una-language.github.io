---
id: syntax_symmetry_chaining
title: Chaining Arrows
---

#### Right arrow of chaining symmetry

Right chainging arrow `|>` is chaining by last parameter. It takes the result of expression and puts it as the last parameter to the next expression.

If you want to use such functional programming libraries as `rambda` you will find `|>` operator very useful. In the following example `phone` constant equals `'IPHONE'`:

```
=-> 'ramda' R
= electronics ::
  :
    title ' iPhone '
    type 'phone'

= phones |>
  electronics
  R.find
    R.propEq 'type' 'phone'
  R.prop 'title'
  R.toUpper
  R.trim
```

#### Left arrow of chaining symmetry

Left chainging arrow `<|` is chaining by second parameter. It takes the result of the expression and puts it as the second parameter to the next expression. This way using `.` function apply operator you can chain calls to regular JavaScript arrays and classes.

Because of "Polish notation" application order it's hard to do chains with default JavaScript array methods. Look how ugly it looks:

```
= sum .reduce
  .filter
    .map (:: 1 2 3) (-> x (+ x 1))
    -> x (> x 2)
  -> (x y) (+ x y)
  0
```

With `<|` it can be rewritten as:

```
= sum <| (:: 1 2 3)
  .map (-> x (+ x 1))
  .filter (-> x (> x 2))
  .reduce (-> (x y) (+ x y)) 0
```