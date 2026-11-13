import test from 'node:test';
import assert from 'node:assert/strict';
import { add, formatVersion } from '../src/utils.js';

test('adds two positive numbers', () => {
assert.equal(add(2, 2), 4); // Originally 4. Five is deliberately wrong.

});

test('adds a negative number', () => {
  assert.equal(add(-2, 3), 1);
});

test('formats the displayed version', () => {
  assert.equal(formatVersion('1.0.0'), 'v1.0.0');
});
