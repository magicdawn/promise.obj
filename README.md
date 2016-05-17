# promise.obj
> promise.obj / promise.props

[![Build Status](https://img.shields.io/travis/magicdawn/promise.obj.svg?style=flat-square)](https://travis-ci.org/magicdawn/promise.obj)
[![Coverage Status](https://img.shields.io/coveralls/magicdawn/promise.obj.svg?style=flat-square)](https://coveralls.io/github/magicdawn/promise.obj?branch=master)
[![npm version](https://img.shields.io/npm/v/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm downloads](https://img.shields.io/npm/dm/promise.obj.svg?style=flat-square)](https://www.npmjs.com/package/promise.obj)
[![npm license](https://img.shields.io/npm/l/promise.obj.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Note
this is target ES5 environment

## Install
```
npm i promise.obj --save
```

## API
```
const pobj = require('promise.obj');

const p = pobj({
  x: Promise.resolve('x'),
  y: Promise.resolve('y')
});

p.then(function(o){
  o.x // 'x'
  o.y // 'y'
})
```

## Changelog
[CHANGELOG.md](CHANGELOG.md)

## License
the MIT License http://magicdawn.mit-license.org