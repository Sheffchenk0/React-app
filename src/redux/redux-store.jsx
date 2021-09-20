import {combineReducers, createStore} from 'redux';
import dialogsPageReducer from './dialogsPageReducer';
import profilePageReducer from './profilePageReducer';
import usersPageReducer from './usersPageReducer';


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
});
let store = createStore(reducers);

window.store = store;

export default store;