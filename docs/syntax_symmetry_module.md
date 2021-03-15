---
id: syntax_symmetry_module
title: Module Arrows
---

#### Right arrow of module symmetry

Una modules are fully compatiable with JavaScript. You can import JavaScript modules to Una and you can import Una modules to JavaScript.

Right module arrow `=->` is import.
If you pass `modules: 'require'` to babel plugin options it works as `require`.
If you pass `modules: 'import'` or pass nothing to babel plugin options it works as `import`.

```
=-> './index.css'
=-> 'react' React
=-> 'react' (: createElement)
=-> 'react' React (: createElement)
```

##### Left arrow of module symmetry

Left module arrow `<-=` is export.
If you pass `modules: 'require'` to babel plugin options it works as `modules.export =`.
If you pass `modules: 'import'` or pass nothing to babel plugin options it works as `export`.

Default module export:

```
<-= a
```

Constant export:

```
<-= = a 1
```

Multiple constants export:

```
<-= ()
  a
  b
  c
  d
```