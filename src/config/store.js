import { combineReducers, createStore } from 'redux';
import cartReducer from '../cart/reducer'; // one reducer 

const rootReducers = combineReducers({
    cart: cartReducer
});

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;