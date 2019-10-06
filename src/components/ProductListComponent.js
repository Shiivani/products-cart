import React, { Component } from 'react';
import Product from './ProductComponent';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
   const 
    render() {
        return (
            <>
                <div className="productList">
                    <div className="productList-container">
                        <div className="productList-row">
                            <ProductConsumer>

                                {(list) => {
                                    return list.products.map( product => {
                                        return <Product key={ product.id } product={ product } />
                                    })
                                    
                                }}
                                
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
