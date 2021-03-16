---
id: syntax_symmetry_async
title: Async Arrows
---

#### Right arrow of async symmetry

Right async arrow `-->` is async function.

```
= getUserPosts --> user
  database.loadPosts user.postIds
```

#### Left arrow of async symmetry

Left async arrow `<--` is await.

```
= checkIfUserIsAdmin --> userId
  = user <-- (database.loadUser userId)
  == user.role 'admin'
```

You can have multiple lines of code in this operator:

```
= value <--
  = a 1
  = (: b) <-- (getAsync a)
  b
```