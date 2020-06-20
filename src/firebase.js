import * as firebase  from 'firebase';

const config = {
    apiKey: "AIzaSyAmqbthEwHBWU_Aw6eWYxqpXO0s9zSWZkI",
    authDomain: "opowiesci-zalane-betonem.firebaseapp.com",
    databaseURL: "https://opowiesci-zalane-betonem.firebaseio.com",
    projectId: "opowiesci-zalane-betonem",
    storageBucket: "opowiesci-zalane-betonem.appspot.com",
    messagingSenderId: "271832796803",
    appId: "1:271832796803:web:2494f85ef55040c05c15b6",
    measurementId: "G-EJS5QM5Z93"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();
const emailAuth = new firebase.auth.EmailAuthProvider();

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    googleAuth,
    firebaseLooper,
    emailAuth
};