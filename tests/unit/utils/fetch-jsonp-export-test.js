import { test, module } from 'qunit';
import fetchJsonp from 'fetch-jsonp';

module('Unit | fetchJsonp exports');

test('Fetch-jsonp exports', (assert) => {
  assert.ok(fetchJsonp, 'fetchJsonp exports an object');
});
