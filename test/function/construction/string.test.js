var assert = require('assert'),
    math = require('../../../index.js'),
    string = math.string;

describe('string', function() {

  it('should be \'\' if called with no argument', function() {
    assert.equal(string(), '');
  });

  it('should be \'true\' if called with true, \'false\' if called with false', function() {
    assert.equal(string(true), 'true');
    assert.equal(string(false), 'false');
  });

  it('should be the identity if called with a string', function() {
    assert.equal(string('hello'), 'hello');
    assert.equal(string(''), '');
    assert.equal(string(' '), ' ');
  });

  it('should convert the elements of an array to strings', function() {
    assert.deepEqual(string([[2,true],['hi',null]]), [['2', 'true'],['hi', 'null']]);
  });

  it('should convert the elements of a matrix to strings', function() {
    assert.deepEqual(string(math.matrix([[2,true],['hi',null]])),
        new math.type.Matrix([['2', 'true'],['hi', 'null']]));
  });

  it('should convert a number to string', function() {
    assert.equal(string(1/8), '0.125');
    assert.equal(string(2.1e-3), '0.0021');
    assert.equal(string(123456789), '1.2346e8'); // TODO: is it desirable that value is rounded?
    assert.equal(string(2000000), '2e6');
  });

  it('should convert a complex number to string', function() {
    assert.equal(string(math.complex(2,3)), '2 + 3i');
  });

  it('should convert a unit to string', function() {
    assert.equal(string(math.unit('5cm')), '50 mm');
  });

  it('should throw an error if called with wrong number of arguments', function() {
    assert.throws(function () {string(1,2)}, SyntaxError);
    assert.throws(function () {string(1,2,3)}, SyntaxError);
  });
});
