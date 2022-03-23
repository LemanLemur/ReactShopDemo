import { SET_DISPLAY_PRODUCT, BACK_TO_HOME_PAGE } from "../actions/types";

const initalState = {
    displayProductPage: false,
    product: {},
};

// manage user state
export default function (state = initalState, action) {
    switch (action.type) {
        case SET_DISPLAY_PRODUCT:
            return {
                ...state,
                displayProductPage: true,
                product: action.payload,
            };
        case BACK_TO_HOME_PAGE:
            return {
                ...state,
                displayProductPage: false,
                product: {},
            };
        default:
            return state;
    }
}
