
import './App.css';
import React, { Component } from 'react';
import ProductList from '../ProductCard/ProductList';
import ProductForm from '../ProductCardManagement/ProductForm';

export default class App extends Component {
	render() {
		return (
			<div>
				<ProductForm />
				<ProductList />
			</div>
		);
	}
}