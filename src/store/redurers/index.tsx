import { combineReducers } from "redux";
import TaskReducer from './TaskReducer';

const reducer = combineReducers({
    counter: TaskReducer
})
export default reducer