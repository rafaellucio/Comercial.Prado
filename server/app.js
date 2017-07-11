const express = require('express'), 
	  path = require('path'), 
	  favicon = require('serve-favicon'), 
	  logger = require('morgan'), 
	  bodyParser = require('body-parser'),
	  mongoose = require('mongoose'),
	  Product = require('./Product/Product');
;

global.db = mongoose.connect('mongodb://localhost:27017/comercialprado');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/products', (req, res) => {

	Product
		.find({})
		.then(products => res.status(200).json(products))
		.catch(error => res.status(500).json(error))
});

app.post('/product', (req, res) => {

	const product = new Product();

	product.price = req.body.price;
	product.image = req.body.image;
	product.validity = req.body.validity;
	product.description = req.body.description;

	product
		.save()
		.then(result => res.status(200).json(result))
		.catch(error => res.status(500).json(error))
});

app.put('/product/:id', (req, res) => {

	Product
		.findById(req.params.id)
		.then(product => {
			product.price = req.body.price || product.price;
			product.image = req.body.image || product.image;
			product.validity = req.body.validity || product.validity;
			product.description = req.body.description || product.description;
			return product;
		})
		.then(updateProduct => updateProduct.save(updateProduct))
		.then(product => res.status(204).send())
		.catch(error => res.status(500).json(error))
})

app.delete('/product/:id', (req, res) => {

	Product
		.findOneAndRemove({ _id: req.params.id})
		.then(result => res.status(204).send())
		.catch(error => res.status(500).json(error))

})

app.use(function(req, res, next) {
	res.status(404).json({commandName: 'Not Found'});
	next();
});

module.exports = app;