'use strict';

/**
 * main exports
 */

module.exports = function promiseObj(o, concurrency) {
  var ks = Object.keys(o);
  var result = {};

  var ps = ks.map(function(k) {
    return o[k].then(function(v) {
      result[k] = v;
    });
  });

  return Promise.all(ps).then(function() {
    return result;
  });
};