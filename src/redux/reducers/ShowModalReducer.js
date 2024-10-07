import { LOGIN_MODAL_SHOW, MODAL_HIDE } from "../actions"



const initialState = {
    show: false

}

const ShowModalReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_MODAL_SHOW:
            return {
                ...state,
                show: true
            }
        case MODAL_HIDE:
            return {
                ...state,
                show: false
            }
        default:
            return state
    }
}

export default ShowModalReducer;