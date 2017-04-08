# promise.obj

[![Greenkeeper badge](https://badges.greenkeeper.io/magicdawn/promise.obj.svg)](https://greenkeeper.io/)
> promise.obj / promise.props

[![Build Status](https://img.shields.io/travis/magicdawn/promise.obj.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.obj)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/promise.obj.svg?style=flat-square)](https://codecov.io/gh/magicdawn/promise.obj)
[![npm version](https://img.shields.io/npm/v/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm downloads](https://img.shields.io/npm/dm/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm license](https://img.shields.io/npm/l/promise.obj.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note
this is target ES5 environment

## Install
```sh
npm i promise.obj --save
```

## API
```js
const pobj = require('promise.obj');

const p = pobj({
  x: Promise.resolve('x'),
  y: Promise.resolve('y'),
  foo: 'foo',
  bar: 3,
  abc: null
});

p.then(function(o){
  o.x   // 'x'
  o.y   // 'y'
  o.foo // 'foo'
  o.bar // 3
  o.abc // null
})
```

## See Also

- [promise.timeout](https://github.com/magicdawn/promise.timeout)
- [promise.retry](https://github.com/magicdawn/promise.retry)
- [promise.map](https://github.com/magicdawn/promise.map)
- [promise.ify](https://github.com/magicdawn/promise.ify)
- [promise.cb](https://github.com/magicdawn/promise.cb)
- [promise.obj](https://github.com/magicdawn/promise.obj)
- [promise.sleep](https://github.com/magicdawn/promise.sleep)

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org