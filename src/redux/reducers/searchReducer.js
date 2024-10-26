import { GET_SEARCH } from "../actions";


const initialState = {
    search: ""
}



const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                ...state,
                search: action.payload, // Qui aggiorni lo stato con le sale ottenute dalla fetch
            };
        default:
            return state;
    }
}


export default searchReducer;