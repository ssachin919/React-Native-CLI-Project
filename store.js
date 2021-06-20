// import { createStore, combineReducers } from 'redux';
// import { addToHistoryReducer } from './reducers/pressReducers';

// const reducer = combineReducers({
//     addToHistory: addToHistoryReducer, 
// });

// const store = () => {
//     return createStore(reducer);
// }

// export default store;

import { createStore } from 'redux';
import addToHistoryReducer from './reducers/pressReducers';

const store = createStore(addToHistoryReducer);

export default store;