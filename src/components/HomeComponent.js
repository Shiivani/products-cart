import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import ProductList from './ProductListComponent';
import CartTotal from './CartTotalsComponent';
import Checkout from './CheckoutComponent';
import $ from 'jquery';

export default class Home extends Component {
    componentDidMount() {
        $(window).scroll(function() {
            if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {   
                $(".checkout-container").css("position","relative");
            }
            else{
                $(".checkout-container").css("position","fixed");
                $(".checkout-container").css("bottom",0);
            }
         });
    }
    render() {
        return (
            <ProductConsumer>
                {(list)=>{
                   return(
                    <div class="list-content">
                        <ProductList/>
                        <div class="checkout-container">
                            <CartTotal value={list} />
                            <Checkout />
                        </div>
                    </div>
                   )
                }

                }
            </ProductConsumer>
        )
    }
}
