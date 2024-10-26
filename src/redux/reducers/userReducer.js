import { LOGGED_IN, LOGGED_OUT } from "../actions"



const initialState = {
    login: false,
    userData: null,
    token: null
}



const userReducer = (state = initialState, action) => {

    switch (action.type) {

        case LOGGED_IN: return {
            ...state,
            login: true,
            userData: action.payload.userData,
            token: action.payload.token

        }
        case LOGGED_OUT: return {
            ...state,
            login: false,
            userData: null,
            token: null
        }
        default:
            return state
    }
}

export default userReducer;