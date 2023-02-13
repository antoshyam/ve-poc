import { combineReducers } from "redux";
import NavigationTreeReducer from "./NavigationTreeReducer";
import Workarea from "./WorkareaReducer";

export default combineReducers({
    navigation: NavigationTreeReducer,
    workarea: Workarea
})