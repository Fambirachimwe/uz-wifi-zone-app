import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBSo69l0LGxzFhw6Vk0sOhc_0hMqP1VWSw",
    authDomain: "uz-wifi-zone.firebaseapp.com",
    databaseURL: "https://uz-wifi-zone.firebaseio.com",
    projectId: "uz-wifi-zone",
    storageBucket: "uz-wifi-zone.appspot.com",
    messagingSenderId: "940536900116",
    appId: "1:940536900116:web:b1b37972cbc907c434d501",
    measurementId: "G-96GH91PB34"
}


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){ 
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("error creating user");
            
        }
    }

    return userRef;
    
    
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;



