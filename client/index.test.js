const assert = require('assert');

const sum = require('./index');

describe('Mocha expect', () => {
  it('Assert Client Unit Tests', () => {
    assert.equal(true, true);
  });

  it('Shold sum two values', () => {
    assert.equal(sum(10, 20), 30);
  });
});
