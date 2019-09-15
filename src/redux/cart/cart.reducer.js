import {addItemToCart, reduceOrRemoveItemFromCart} from './cart.utils'

const INITIAL_STATE ={
    hidden: true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
        case 'ADD_ITEM':
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems, action.payload)
                }
                break;
        case 'DELETE_ITEM': 
                return {
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                }
                break;
        case 'REDUCE_OR_REMOVE_ITEM': 
                return {
                    ...state,
                    cartItems: reduceOrRemoveItemFromCart(state.cartItems,action.payload)
                }
                break;
    
        default:
            return state
            break;
    }
}

export default cartReducer