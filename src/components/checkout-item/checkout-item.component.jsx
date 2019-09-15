import React from 'react'
import './checkout-item.styles.scss'

import {connect} from 'react-redux'
import {deleteItemFromCart, reduceOrRemoveItemFromCart, addItemToCart} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, deleteItem, reduceItem,addItem}) => 
{
    const {name,imageUrl,price,quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="Item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'> 
                <div className='arrow' onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => deleteItem(cartItem)}>&#10005;</div>
        </div>
    );
}
const mapDispatchToProps = dispatch => ({
    deleteItem: item => dispatch(deleteItemFromCart(item)),
    reduceItem: item => dispatch(reduceOrRemoveItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
})

export default connect(null,mapDispatchToProps)(CheckoutItem);