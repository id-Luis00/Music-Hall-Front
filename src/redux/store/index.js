import { combineReducers, configureStore } from "@reduxjs/toolkit"
import ShowModalReducer from "../reducers/ShowModalReducer";



const rootReducer = combineReducers({
    modals: ShowModalReducer
})




const store = configureStore({
    reducer: rootReducer
})


export default store;