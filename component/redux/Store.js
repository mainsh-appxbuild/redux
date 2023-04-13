import {createStore, combineReducers} from 'redux';
import reducer from './Reducer/reducer';

const rootReducer = combineReducers({
  //login: reducer,
});

export const store = createStore(rootReducer);
