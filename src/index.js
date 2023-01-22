import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFbygihjZVucv63fbAmLwJ0HmxzAnIbRg",
    authDomain: "new-e4cea.firebaseapp.com",
    projectId: "new-e4cea",
    storageBucket: "new-e4cea.appspot.com",
    messagingSenderId: "170977536593",
    appId: "1:170977536593:web:4208326e1834004bd8a670",
    measurementId: "G-RTMKZQDGT4"
  };

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);