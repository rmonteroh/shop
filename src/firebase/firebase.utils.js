import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWzlbEHH_DeBPDmUauEOpy_9I2bAGSf9Y",
    authDomain: "react-ecomerce-db.firebaseapp.com",
    databaseURL: "https://react-ecomerce-db.firebaseio.com",
    projectId: "react-ecomerce-db",
    storageBucket: "",
    messagingSenderId: "360506671042",
    appId: "1:360506671042:web:bb0c8b73dc458ecbfea05b"
  };

    //Login user
    export const createUserProfilDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName, email, createdAt, ...additionalData
                })
            } catch (error) {
                console.log('Error creating user', error.message);
                
            }
        }
        
        return userRef;
        
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
