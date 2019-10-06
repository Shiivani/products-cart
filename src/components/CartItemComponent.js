import React from 'react'

export default function CartItem({item,value}) {
    const{id,productName,imageUrl,price,total,count} = item;
    const {increment,decrement,removeItem} = value;
    return (
        <div className="item-row">
            <div className="item-col">
                <img src={imageUrl} alt={productName} />
            </div>
            <div className="item-col">
                <span>{productName}</span>
            </div>
            <div className="item-col">
            <span>₹{price}</span>
            </div>
            <div className="item-col">
                <div className="btn-container">
                    <div>
                        <div className="btn" onClick={()=>decrement(id)}>-</div>
                        <span className="btn">{count}</span>
                        <div className="btn" onClick={()=>increment(id)}>+</div>
                    </div>
                </div>
            </div>
            <div className="item-col">
                <div className="trash-icon" onClick={()=>removeItem(id)}>
                    <i className="fa fa-trash" />
                </div>
                
            </div>
            <div className="item-col">
                <strong>Total : ₹{total}</strong>
            </div>
        </div>
    )
}
