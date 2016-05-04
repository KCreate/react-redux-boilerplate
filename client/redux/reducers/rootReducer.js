// Dependencies
import { combineReducers } from 'redux';

// Sub reducers
import subReducer from './subReducer';

// Create the root reducer
const rootReducer = combineReducers({
    subProp: subReducer,
});

// Export
export default rootReducer;
