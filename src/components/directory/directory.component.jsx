import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ],
        }
    }

    render() {
        return (
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
                    this.state.sections.map(({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps }/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;