const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
  res.status(200).json({ products: [] });
});

app.use((req, res, next) => {
  res.status(404).json({ url: 'not found : (' });
  next();
});

module.exports = app;
