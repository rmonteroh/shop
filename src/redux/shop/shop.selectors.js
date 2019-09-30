import {createSelector} from 'reselect'

const selectCollection = state => state.shop;

export const selectShopCollection = createSelector(
    [selectCollection],
    shop => shop.collections
)

export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectCollection],
        shop => shop.collections[categoryUrlParam] //categoryUrlParam -> 'hats' or 'men' or 'jackets' or ...
    )