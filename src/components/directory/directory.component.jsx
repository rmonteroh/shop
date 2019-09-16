import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => {
    
    
    return(
    <div className="directory-menu">
    {
        // antes del spred operator
        /* this.state.sections.map(({title, imageUrl, id, size}) => (                        
            <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        )) */

        // Despues del spread operatos
        /**
         * El id de queda pq es el unico que no tiene el mismo nombre que la propiedad
         * Los demas valores tienen el mismo nombre de la propiedad pasada al
         * componente por eso se utiliza el spread operator.
         */
        sections.map(({id, ...otherProps}) => (
            <MenuItem key={id} {...otherProps }/>
        ))
    }
</div>
)}
    

const mapSateToPros = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapSateToPros)(Directory);