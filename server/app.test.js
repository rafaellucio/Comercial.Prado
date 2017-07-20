const assert = require('assert');
const sinon = require('sinon');
const request = require('supertest');

const app = require('./app.js');

describe('GET /products', () => {

  it('respond with json', done => {

    request(app)
    .get('/products')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done)

  });

  it('respond 404 when not found URI', done => {

    request(app)
    .get('/test')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(404, done);

  });

});
