import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import rootReducers from './reducers';
const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  root:rootReducers
});
const store = createStore(reducer);

export default store;
