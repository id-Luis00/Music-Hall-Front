import { LOGIN_MODAL_HIDE, LOGIN_MODAL_SHOW } from "../actions"



const initialState = {
    show: false
}

const ShowModalReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN_MODAL_SHOW: 
            return {
                ...state,
                show: true
            }
        case LOGIN_MODAL_HIDE:
            return {
                ...state,
                show: false
            }
        default: 
        return state
    }
}

export default ShowModalReducer;