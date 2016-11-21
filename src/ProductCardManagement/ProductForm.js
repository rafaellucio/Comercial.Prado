import React, { Component, PropTypes } from 'react';
import './ProductForm.Stylesheet.css';

export default class ProductForm extends Component {
    static propTypes = {
        className: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
        	...props
        }
    }

    onChange() {

    }

    onChangeDescription(nodeChange, event) {
    	var self = this;
    	this.setState({
    		description: {
				labelText: self.state.description.labelText,
				labelDetail: self.state.description.labelDetail,
    			[nodeChange]: event.target.value
    		}
    	});
    }

    render() {
        return (
            <form className="product-form" action="" method="POST" role="form">
            	<legend>{this.state.title}</legend>
            
            	<div className="form-group">
        			<div className="row">
            			<label htmlFor="">{this.state.description.labelText}</label>
            		</div>
            		<div className="row">
            			<input type="text" className="form-control" id="" placeholder="Descrição breve do produto..." onChange={this.onChangeDescription.bind(this, 'text')} />
        			</div>
        		</div>
        
        		<div className="form-group">
        			<div className="row">
        				<label htmlFor="">{this.state.description.labelDetail}</label>
        			</div>
        			<div className="row">
        				<input type="text" className="form-control" id="" placeholder="Descrição detalhada do produto em promoção..." onChange={this.onChangeDescription.bind(this, 'detail')} />
        			</div>
        		</div>
            
            	<div className="form-group">
            		<div className="row">
            			<label htmlFor="">{this.state.price.labelCurrent}</label>
            		</div>
            		<div className="row">
            			<input type="number" className="form-control" id="" placeholder="R$ 0.00" onChange={this.onChange.bind(this, 'price.current')}/>
            		</div>
            	</div>
            
            	<div className="form-group">
            		<div className="row">
            			<label htmlFor="">{this.state.price.labelPromotion}</label>
            		</div>
            		<div className="row">
            			<input type="number" className="form-control" id="" placeholder="R$ 0.00" onChange={this.onChange.bind(this, 'price.promotion')} />
            		</div>
            	</div>
            
            	<div className="form-group">
            		<div className="row">
            			<label htmlFor="">Validade</label>
            		</div>
            		<div className="row">
            			<input type="date" className="form-control" id="" placeholder="DD-MM-AAAA" onChange={this.onChange.bind(this, 'validate')} />
            		</div>
            	</div>
            
            	<div className="form-group">
            		<div className="row">
            			<label htmlFor="">{this.state.image.label}</label>
            		</div>
            		<div className="row">
            			<input type="file" className="form-control" id="" onChange={this.onChange.bind(this, 'image.src')} />
            		</div>
            	</div>

            	<button type="submit" className="btn btn-primary">Adicionar Produto <i className="fa fa-plus"></i></button>
            </form>
        );
    }
};

ProductForm.defaultProps = {
	title: 'Cadastrar Produto Promoção',
	image: {
		label: 'Selecione uma imagem que represente o produto',
		src: '',
		alt: ''
	},
	price: {
		labelCurrent: 'Preço atual',
		labelPromotion: 'Preço promoção',
		current: 0.00,
		promotion: 0.00
	},
	description: {
		labelText: 'Descrição breve do produto em promoção',
		labelDetail: 'Descrição detalhada do produto em promoção',
		text: '',
		detail: ''
	},
	validate: ''
}