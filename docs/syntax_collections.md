---
id: syntax_collections
title: Collections
---

There're two basic collection types in Una:

-   `::` - List - array in JavaScript
-   `:` - Map - object in JavaScript

#### List and map construction

Here's an example of creating a list of numbers

```
= numbers :: 1 2 3
```

Here's an example of creating a map of user:

```
= user :
  name 'John'
  age 13
  parents :
    mother :
      name 'Alice'
      age 42
    father :
      name 'Bob'
      age 39
```

Maps and lists can be nested to each self:

```
= users ::
  : (name 'Alice') (age 32)
  : (name 'Bob') (age 25)

= user :
  name 'Chris'
  posts ::
    : (title 'Post 1') (likes 30)
    : (title 'Post 2') (likes 44)
    : (title 'Post 3') (likes 2)
```

When creating maps and lists you can use already declared consts:

```
= a 1
= numbers :: a 2 3

= name 'John'
= user :
  name
  age 13
```

#### List and map deconstruction

Just like in JavaScript you can deconstruct maps and lists

```
= numbers :: 1 2 3
= (:: one two three) numbers
console.log one

= user : (name 'John') (age 12)
= (: name) user
console.log name
```

When deconstructing maps you can rename the field:

```
= user : (name 'John') (age 12)
= (: (name title)) user
console.log title
```

You can deconstruct netsted maps and lists as well. For example:

```
= user :
  name 'John'
  age 12
  passport :
    id 1
    country 'USA'

= (: (passport (: id))) user
console.log id
```

#### Getting field and element

To get a field from map or element from list you can use `.`:

```
= list :: 1 2 3
= map : (a 1) (b 2)

console.log (. list 0)
console.log (. map 'a')
```

#### Dynamic field key

Also `.` is used to setup dynamic key for a field in map. Just like `{[key]:value}` in JavaScript. Look at the example:

```
= key 'name'
= value 'John'
= object :
  . key value
```

#### Method calls

Also `.` is used to call methods on any object.

```
= numbers :: 1 2 3
= incrementedNumbers
  numbers.map (-> x (+ x 1))
```

is the same as:

```
= numbers :: 1 2 3
= incrementedNumbers
  .map numbers (-> x (+ x 1))
```

It's used when you chain calls of methods on one object. But better look at `<|` chaining operator described futher.

#### Expansion

Expansion operator `...` works just like in JavaScript for construction and deconstruction of lists and maps:

```
= threeNumbers :: 1 2 3
= fiveNumbers :: ...threeNumbers 45
= (:: one ...restNumbers) fiveNumbers

= userFields :
  name 'John'
  age 13

= user :
  id 1
  gender 'm'
  isAlive true
  ...userFields

= (: isAlive ...rest) user
console.log rest
```