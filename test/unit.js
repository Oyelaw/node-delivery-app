var helpers = require('./../lib/helpers');
var assert = require('assert');

var unit = {};
// Asset that the getNumber returns a number
unit['helpers.getNumber should return a number'] = function(done){
  var val = helpers.getNumber();
  assert.equal(typeof(val), 'number');
  done();
};

// Asset that the getNumber
unit['helpers.getNumber should return 1'] = function(done){
  var val = helpers.getNumber();
  assert.equal(val, 1);
  done();
};

// Asset that the getNumber is returning 2
unit['helpers.getNumber should return 2'] = function(done){
  var val = helpers.getNumber();
  assert.equal(val, 2);
  done();
};

module.exports = unit;
