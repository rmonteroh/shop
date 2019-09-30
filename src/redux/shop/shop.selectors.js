import {createSelector} from 'reselect'

const selectCollection = state => state.shop;

export const selectShopCollection = createSelector(
    [selectCollection],
    shop => shop.collections
)

// Convirtiendo las colecciones en arreglos.
export const selectCollectionsForPreview = createSelector(
    [selectCollection],
    shop => Object.keys(shop.collections).map(key => shop.collections[key])
)

export const selectCategory = categoryUrlParam => 
    createSelector(
        [selectCollection],
        shop => shop.collections[categoryUrlParam] //categoryUrlParam -> 'hats' or 'men' or 'jackets' or ...
    )