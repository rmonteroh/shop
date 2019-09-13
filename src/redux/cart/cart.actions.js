export const toggleCartHidden = status => ({
    type: 'TOGGLE_CART_HIDDEN',
    payload: status
});

export const addItemToCart = item => ({
    type: 'ADD_ITEM',
    payload: item
});