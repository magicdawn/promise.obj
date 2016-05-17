'use strict';

/**
 * module dependencies
 */

const pobj = require('../');
const should = require('should');

describe('It works', function() {
  const fn = function(x) {
    return Promise.resolve(x);
  };

  const errFn = function(msg) {
    return Promise.reject(new Error(msg));
  };

  it('normal works', function*() {
    const o = yield pobj({
      hello: fn('hello'),
      world: fn('world')
    });

    o.hello.should.equal('hello');
    o.world.should.equal('world');
  });

  it('error works', function*() {
    try {
      const o = yield pobj({
        hello: fn('hello'),
        world: errFn('world')
      });
    } catch (e) {
      e.should.instanceof(Error);
      e.message.should.equal('world');
    }
  });
});