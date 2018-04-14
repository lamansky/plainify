'use strict'

const assert = require('assert')
const equals = require('equals')
const plainify = require('.')

describe('plainify()', function () {
  it('should return a plain object as-is', function () {
    const obj = {}
    assert.strictEqual(obj, plainify('test', obj))
  })

  it('should make non-plain-object a value of a plain object under the given key', function () {
    assert(equals(plainify('test', 'value'), {test: 'value'}))
  })
})
