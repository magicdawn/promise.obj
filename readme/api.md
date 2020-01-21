## Note

this is target ES5 environment

## API

```js
const pobj = require('promise.obj')
```

## Example

```js
const pobj = require('promise.obj')

const p = pobj({
  x: Promise.resolve('x'),
  y: Promise.resolve('y'),
  foo: 'foo',
  bar: 3,
  abc: null,
})

p.then(function(o) {
  o.x // 'x'
  o.y // 'y'
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
