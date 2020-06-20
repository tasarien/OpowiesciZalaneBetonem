import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firebase';

import Header from './components/title/header';

let auth = firebase.auth()

firebase.auth().onAuthStateChanged((user) => {
  ReactDOM.render(
    <React.StrictMode>
      <Header/>
      <App user={user} auth={auth}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
