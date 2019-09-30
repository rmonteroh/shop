import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollection } from '../../redux/shop/shop.selectors'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} { ...otherCollectionProps}></CollectionPreview>
                ))
            }
    </div>
) 

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollection
})

export default connect(mapStateToProps)(CollectionsOverview)