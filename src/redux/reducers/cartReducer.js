import { SET_PRODUCTS, DELETE_PRODUCTS } from "../actions/types";

const initalState = {
    isEmpty: true,
    products: [],
};

// manage user state
export default function (state = initalState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isEmpty: false,
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: [],
                isEmpty: true,
            };
        default:
            return state;
    }
}
