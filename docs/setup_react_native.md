---
id: setup_react_native
title: React Native Setup
sidebar_label: Setup React Native
---

Add `una` file extension to `metro.config.js` like this:

```javascript
module.exports = {
    resolver: {
        sourceExts: [..., 'una']
    }
}
```