const assert = require('assert');

const calculator = require('./index');

describe('Mocha expect', () => {
  it('Assert Client Unit Tests', () => {
    assert.equal(true, true);
  });

  it('Shold sum two values', () => {
    assert.equal(calculator.exec('sum', 10, 20), 30);
  });

  it('Shold subtract two values', () => {
    assert.equal(calculator.exec('sub', 10, 20), -10);
  });

  it('Shold sum 10 + 10 whem no pass name operation', () => {
    assert.equal(calculator.exec(undefined, 10, 20), 20);
  });

  it('Shold mult two values', () => {
    assert.equal(calculator.mult(10, 20), 200);
  });
});
