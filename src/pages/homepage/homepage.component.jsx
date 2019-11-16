import React from 'react';
import {HomePageContainer} from './homepage.styles'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component'

const HomePage = () => (
    // Antes de utilizar styled-components
    /* <div className="homepage">
        <Directory />
    </div> */
    //Despues de utillizar styled-components

    <HomePageContainer>
        <Directory />
    </HomePageContainer>
)

export default HomePage;