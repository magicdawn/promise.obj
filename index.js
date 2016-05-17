'use strict';

/**
 * module dependencies
 */

var pmap = require('promise.map');

/**
 * main exports
 */

module.exports = function promiseObj(o, concurrency) {
  var ks = Object.keys(o);
  var result;
  if (o.constructor) result = new o.constructor();
  else result = {};

  var ps = ks.map(function(k) {
    o[k].then(function(v) {
      result[k] = v;
    });
  });

  return Promise.all(ps).then(function() {
    return result;
  });
};