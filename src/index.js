import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/firestore'
import 'firebase/auth'
import {Provider} from "react-redux";
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from "./config/firebaseConfig"
import {createFirestoreInstance} from "redux-firestore";
import {store} from "./store/index"

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
}


ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
