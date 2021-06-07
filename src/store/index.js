import {applyMiddleware, combineReducers, createStore} from "redux";
import isReducer from "./reducer/isReducer";
import thunk from "redux-thunk";
import {getFirebase} from "react-redux-firebase";
import {videoReducer} from "./reducer/videoReducer";

const ollReducer = combineReducers({
    isReducer,
    videoReducer
})

export const store = createStore(ollReducer, applyMiddleware(thunk.withExtraArgument({getFirebase})))