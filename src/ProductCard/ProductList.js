import React, { Component, PropTypes } from 'react';
import Product from './Product';
import './ProductList.Stylesheet.css';


export default class ProductList extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
        	products: [
        		{
        			id: 1,
        			image: {
        				src: 'http://comercialprado.com.br/images/image-01.png',
        				alt: 'Product image'
        			},
        			price: {
        				promotion: 0.00,
        				current: 0.00
        			},
        			description: {
        				text: "Caixa d'água 500 litros Polietileno.",
        				detail: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquid eligendi suscipit ullam assumenda natus quia maxime, atque odit fugit quis quisquam at optio commodi, maiores corrupti perferendis dolorum obcaecati!'
        			},
        			validate: '22/02/2190',
        			creationDate: '20/02/1990'
        		}
        	]
        }
    }

    render() {
        return (
        	<ul className="product-list">
        		{
	            	this.state.products.map(product => {
		        		return (
		        			<li key={product.id}>
		        				<Product {...product} />
	        				</li>
	        			)
		            })
	            }
        	</ul>
        );
    }
}