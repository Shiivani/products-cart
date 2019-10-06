import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import CartList from './CartListComponent';
import CartTotal from './CartTotalsComponent';

export default class Cart extends Component {
    render() {
        return (
            <div class="cart-wrapper">
                <ProductConsumer>
                    {(value) => {
                        const {cart}= value;
                        if(cart.length>0){
                            return(
                                <>
                                    <h1>My Cart</h1> 
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                </>
                            );
                        }
                        else {
                            return(
                                <div className="empty-container">
                                    <div className="empty-row">
                                        <div className="empty-col"> 
                                            <h2>Cart is currently empty</h2>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    }}
                </ProductConsumer>     
            </div>
        )
    }
}
