import React from 'react';

import {HeaderContainer, OptionsContainer, OptionLink,LogoContainer} from './header.styles'

import {ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component'

/* REDUX */
import {connect} from 'react-redux'


import {auth} from '../../firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect'

const Header = ({currentUser, hidden})=>{
    console.log('hidden',hidden);
    return (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo  className='logo' />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ? (
                    <OptionLink as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                ):(
                    <OptionLink to='/sign-in'>SIGN IN</OptionLink>
                )
            }
            <CartIcon  />
        </OptionsContainer>
        {hidden ? null : (<CartDropdown onClick={()=>hidden}/>)}
        
    </HeaderContainer>
    )
}

// Utilizando selectores
/* const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
}) */

// Utilizando createStructuredSelector cuando tenemos muchos selectores, de esta manera no hay que pasarle
// el state ya que createStructuredSelector se encarga de obtener el state general y pasarselo a cada selector.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);