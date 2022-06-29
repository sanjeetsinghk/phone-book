import {combineReducers} from 'redux';
import phoneBookReducer from './PhoneBookReducer';
// other reducers needs to add here

const rootReducers = combineReducers({    
    contactsData : phoneBookReducer      
});
export default rootReducers;