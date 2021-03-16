---
id: syntax_react
title: React and JSX
---

There's no JSX in Una. So instead of JSX you should use React.createElement, where first parameter is component, second parameters is passing props, and the rest of parameters are children.

```
=-> 'react' React

= (: (createElement e)) React

= Component -> ((: count name))
  e div (: (style (: backgroundColor 'red')))
    e div : count
    e div : name
```

For styling I recommend to use `styled-components`. I will make code much cleaner. Here's the short example of React app with `styled components`:

```
=-> './index.css'
=-> 'react' React
=-> 'react-dom' ReactDOM
=-> './styles' S

= (: (createElement e)) React

= App -> ((: name))
  = (:: count setCount) (React.useState 0)
  e S.Container :
    e S.Hello (: (color 'green')) 'Hello, '
    e S.Name : name
    e S.IncrementCount
      : (onClick (-> () (setCount (+ count 1))))
      'Press me'
    e S.Count : count

ReactDOM.render
  e App (: (name 'John'))
  document.getElementById 'root'
```