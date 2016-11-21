import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './Product.Stylesheet.css';

export default class Product extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
        	image: props.image,
        	price: props.price,
        	description: props.description,
        	validate: props.validate,
        	creationDate: props.creationDate
        }
    }

    toggleProductDetail() {
    	var node = ReactDOM.findDOMNode(this.refs.showHideProductDetail);
    	node.classList.toggle('active');
    }

    render() {
        return (
        	<article className="card card-1">
        		<header className="card-header">
	        		<img className="card-image" src={this.state.image.src} alt={this.state.image.alt} />
	        		<h2 className="card-price">
	        			<p className="price-current">De: R$ {this.state.price.current}</p>
	        			<p className="price-old">Por: R$ {this.state.price.promotion}</p>
        			</h2>
        		</header>
        		<section className="card-section">
        			<dl>
        				<dt>
        					{this.state.description.text}
        				</dt>
        				<dd>
        					{this.state.validate}
        				</dd>
        				<dd>
        					{this.state.creationDate}
        				</dd>
        			</dl>
        		</section>
        		<footer className="card-footer">
        			<button onClick={this.toggleProductDetail.bind(this)}>Exibir detalhes <i className="fa fa-angle-double-up"></i></button>
        		</footer>
        		<div ref="showHideProductDetail" className="card-detail">
        			<button onClick={this.toggleProductDetail.bind(this)} className="card-detail-close">Esconder detalhes <i className="fa fa-angle-double-down"></i></button>
					<p>{this.state.description.detail}</p>
        		</div>
        	</article>
        );
    }
}

Product.defaultProps = {
	image: {
		src: 'http://lorempixel.com/output/city-q-c-300-300-9.jpg',
		alt: 'Product image'
	},
	price: {
		promotion: '',
		current: 0.00
	},
	description: {
		text: '',
		detail: ''
	},
	validate: '',
	creationDate: ''
};