import {createSelector} from 'reselect'

/**
 * 
 * @param {*} state 
 * INPUT SELECTORS => Es una funcion que recibe todo el estado y devuelve
 * una partte del mismo.
 */
const selectCart = state => state.cart;

/**
 * OUTPUT SELECTORS => Utilizamos el createSelectors que recibe una coleccion de INPUT SELECTORS como primer
 * argumento, y como segundo una funcion que devuelve el valor que queremos de estos selectores.
 */
export const selectCartItems = createSelector(
    [selectCart], // Recibe una collecion de input selectors ex: [selectCart, selectUser].
    (cart) => cart.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems], // Recibe una collecion de input selectors ex: [selectCart, selectUser].
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    )
);