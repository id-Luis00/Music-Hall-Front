// reducers/saleReducer.js
import { GET_SALE } from "../actions";


const initialState = {
    saleData: null,
};

const saleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SALE:
            return {
                ...state,
                saleData: action.payload, // Qui aggiorni lo stato con le sale ottenute dalla fetch
            };
        default:
            return state;
    }
};

export default saleReducer;
