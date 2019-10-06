import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotal({value}) {
    const{ cartTotal , clearCart}=value;
    
    return (
        <div>
            <div className="carttotal-container">
                <div className="clear-cart-container">
                    <Link to="/">
                        <button className="clear-cart-button" onClick={()=>clearCart()}>
                            Clear Cart
                        </button>
                    </Link>
                </div>
                <h5>
                    <span>SubTotal:</span>
                    <strong>₹{cartTotal}</strong>
                </h5>
            </div>
        </div>
    )
}
