import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors'

// Cuando al connect no se le pasa el segundo parametro que es el dispatch
// el pasa ese dispatch como parametro al componente
// para checarlo cambie esto ({cartItems, history, ...otherProps}) y haga un
// console.log(otherProps)
const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    )) 
                ):
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown)); 