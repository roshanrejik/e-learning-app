import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../reducer/userReducer";
import studentReducer from "../reducer/studentReducer";
import courseReducer from "../reducer/courseReducer";
const configureStore=()=>{
    const store=createStore(combineReducers({
            user:userReducer,
            student:studentReducer,
            course:courseReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore