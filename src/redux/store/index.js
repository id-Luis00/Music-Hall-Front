import { combineReducers, configureStore } from "@reduxjs/toolkit";
import saleReducer from "../reducers/saleReducer";
import searchReducer from "../reducers/searchReducer";
import userReducer from "../reducers/userReducer";



const rootReducer = combineReducers({
    sale: saleReducer,
    search: searchReducer,
    user: userReducer
})


const store = configureStore({
    reducer: rootReducer
})


export default store;