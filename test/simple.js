'use strict'

/**
 * module dependencies
 */

const pobj = require('../')
const should = require('should')

describe('It works', function() {
  const fn = function(x) {
    return Promise.resolve(x)
  }

  const errFn = function(msg) {
    return Promise.reject(new Error(msg))
  }

  it('normal works', async function() {
    const o = await pobj({
      hello: fn('hello'),
      world: fn('world'),
      x: '1',
      y: 2,
      z: null,
    })

    o.hello.should.equal('hello')
    o.world.should.equal('world')
  })

  it('error works', async function() {
    try {
      const o = await pobj({
        hello: fn('hello'),
        world: errFn('world'),
      })
    } catch (e) {
      e.should.instanceof(Error)
      e.message.should.equal('world')
    }
  })
})
