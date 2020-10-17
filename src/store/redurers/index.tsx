import { combineReducers } from "redux";
import TaskReducer from './TaskReducer';

const reducer = combineReducers({
    tasks: TaskReducer
})
export default reducer