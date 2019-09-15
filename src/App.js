import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import {auth,createUserProfilDocument } from './firebase/firebase.utils';

import {Switch, Route, Redirect} from 'react-router-dom';

/* REDUX */
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {  

  unsubscribeFormAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          });
          console.log(this.state);
          
        })
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    // Close the subscription to firebase, evit memory leaks.
    this.unsubscribeFormAuth();
  }

  render(){ 
    return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/sign-in' render={()=> 
          this.props.currentUser ?
          (<Redirect to='/' />) :
          (<SignInAndSignUpPage />) 
        }></Route>
        <Route exact path='/checkout' component={Checkout} ></Route>

      </Switch>
    </div>
  )};
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
