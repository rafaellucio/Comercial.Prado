const assert = require('assert');

describe('#index.js', () => {

  test('should initialize template', () => {

    document.body.innerHTML = '<div id="root"></div>';

    assert.equal(document.getElementById('root').children.length, 0);

    const index = require('./index');

    assert.equal(document.getElementById('root').children.length, 2);

  });

});
