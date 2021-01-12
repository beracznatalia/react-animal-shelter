import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import mail from './mailReducer';
import gallery from './galleryReducer';

export default combineReducers({
    firebase: firebaseReducer,
    mail,
    gallery
})