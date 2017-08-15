import assert from 'assert';

describe('#index.js', () => {
  beforeEach(() => {
    document.body.innerHTML = '<noscript>You need to enable JavaScript to run this app.</noscript><div id="root"></div>';
  });

  test('should test initial state of document.body', () => {
    assert.equal(document.body.children.length, 2);
  });

  test('should initialize template when resolve index.js', () => {
    require('./index'); // eslint-disable-line
    assert.equal(document.body.firstChild.nextSibling.children.length, 2);
  });
});
