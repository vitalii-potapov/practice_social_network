import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import profileReducer from '../components/profile/wall/profile-reducer';
import dialogsReducer from '../components/dialogs/dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const reducers = combineReducers({
  pageProfile: profileReducer,
  pageDialogs: dialogsReducer,
  sidebar: sidebarReducer,
});

const enhancers = [];
const store = createStore(reducers, {}, composeWithDevTools(...enhancers));

export default store;
