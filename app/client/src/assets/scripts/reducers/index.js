import { combineReducers } from 'redux';
import CommentsReducer from './reducercomments';

const rootReducer = combineReducers({
    books: CommentsReducer

});

export default rootReducer;
