const assert = require('assert');

const calculator = require('./index');

describe('Mocha expect', () => {
  it('Assert Client Unit Tests', () => {
    assert.equal(true, true);
  });

  it('Shold sum two values', () => {
    // assert.equal(calculator.exec('sum', 10, 20), 30);
  });
});
