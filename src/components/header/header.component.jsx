import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
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
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo  className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? (
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                ):(
                    <Link className='option' to='/sign-in'>SIGN IN</Link>
                )
            }
            <CartIcon  />
        </div>
        {hidden ? null : (<CartDropdown onClick={()=>hidden}/>)}
        
    </div>
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