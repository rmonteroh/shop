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
                    cartItems: [...state.cartItems, action.payload]
                }
                break;
    
        default:
            return state
            break;
    }
}

export default cartReducer