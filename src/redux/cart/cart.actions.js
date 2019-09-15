export const toggleCartHidden = status => ({
    type: 'TOGGLE_CART_HIDDEN',
    payload: status
});

export const addItemToCart = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const deleteItemFromCart = item => ({
    type: 'DELETE_ITEM',
    payload: item
});

export const reduceOrRemoveItemFromCart = item => ({
    type: 'REDUCE_OR_REMOVE_ITEM',
    payload: item
});