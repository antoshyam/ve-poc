import { combineReducers } from "redux";
import NavigationTreeReducer from "./NavigationTreeReducer";
import WorkareaReducer from "./WorkareaReducer";

export default combineReducers({
    navigation: NavigationTreeReducer,
    workarea: WorkareaReducer
})