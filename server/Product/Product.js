'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  validity: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)