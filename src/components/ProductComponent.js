import React, { Component } from 'react';
import { ProductConsumer } from '../context';

export default class Product extends Component {
    render() {
        const { id, brandName, productName, quantity, price, MRP, imageUrl, offerText, inCart, count }= this.props.product;
        return (
            <div className="productWrapper">
                <ProductConsumer>
                    { list => (
                        <div>
                        <div className="Card">
                        <div className="productCard">
                            <div className="img-container">
                                <img src={imageUrl} alt={productName} />
                                <p className="offer-text">{offerText}</p>
                            </div>
                        </div>
                        <div className="productDetails">
                            <h2 className="brand-name">{brandName}</h2>
                            <h3 className="product-name">{productName}</h3>
                            <p className="quantity">{quantity}</p>
                            <p className="mrp">{MRP}</p>
                            <h4 className="price">₹{price}</h4>
                            <div className={`product-btn-container ${inCart?"visible":"hidden"}` }>
                                <div>
                                    <div className="btn" onClick={()=>{list.decrement(id);}}>-</div>
                                    <span className="btn">{count}</span>
                                    <div className="btn" onClick={()=>{list.increment(id);}}>+</div>
                                </div>
                            </div>
                            <button className={`cart-button ${inCart?"hidden":"visible"} `} disabled={inCart ? true : false} onClick={() => {
                                list.addToCart(id);
                            }}>
                                {inCart?(<h3 disabled>In Cart</h3>):(<h3 disabled>Add To Cart</h3>)}
                            </button>
                           
                        </div>
                        </div>
                        </div>
                    )}
                    
                </ProductConsumer>
            </div>
        )
    }
}
