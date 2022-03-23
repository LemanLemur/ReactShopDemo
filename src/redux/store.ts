import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create store for state trees e.g. user authentication 
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;