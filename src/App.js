import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth,createUserProfilDocument } from './firebase/firebase.utils';

import {Switch, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFormAuth = null;

  componentDidMount(){
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }
      
    })
  }

  componentWillUnmount(){
    // Close the subscription to firebase, evit memory leaks.
    this.unsubscribeFormAuth();
  }



  render(){ 
    return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop' component={ShopPage}></Route>
        <Route exact path='/sign-in' component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  )};
}

export default App;
