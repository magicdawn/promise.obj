'use strict';

/**
 * main exports
 */

module.exports = function promiseObj(o) {
  var ks = Object.keys(o);
  var result = {};

  var ps = ks.map(function(key) {
    var value = o[key];
    return Promise.resolve(value).then(function(val) {
      result[key] = val;
    });
  });

  return Promise.all(ps).then(function() {
    return result;
  });
};