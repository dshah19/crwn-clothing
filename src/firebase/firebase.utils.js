import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBgfO2SVljvQBOFqJ9MPZcf6rCISi025_0",
    authDomain: "crwn-db-4c1e3.firebaseapp.com",
    projectId: "crwn-db-4c1e3",
    storageBucket: "crwn-db-4c1e3.appspot.com",
    messagingSenderId: "844786759469",
    appId: "1:844786759469:web:4e062b2dfc472a9fd9c5a4",
    measurementId: "G-L090MS3MGX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            }) 
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;