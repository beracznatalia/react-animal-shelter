import { createStore, applyMiddleware, compose } from 'redux';
import firebase from 'firebase/app';
// eslint-disable-next-line
import database from 'firebase/database';
// eslint-disable-next-line
import storage from 'firebase/storage';
import thunk from 'redux-thunk';

import { getFirebase } from 'react-redux-firebase';

import rootReducer from './reducers';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

const rrfConfig = {
    userProfile: 'users'
}

export default function configureStore() {
    firebase.initializeApp(firebaseConfig);
    const middleware = [thunk.withExtraArgument(getFirebase)];
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware)
        )
    )
    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch
    }
    return {store, rrfProps};
}