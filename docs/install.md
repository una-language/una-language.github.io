---
id: install
title: Installation
sidebar_label: Installation
slug: /
---

Install transpiler and babel plugin:

```
npm i -D una-language babel-plugin-una-language
```

Add the babel plugin to your `babel.config.js`:

```javascript
{
    plugins: ['una-language']
}
```

The following setup process depends on your platform:
- [NodeJS](setup_node)
- [React](setup_react)
- [React Native](setup_react_native)