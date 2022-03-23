import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import displayReducer from './displayReducer';


export default combineReducers({
    cart: cartReducer,
    products: productsReducer,
    display: displayReducer,
})