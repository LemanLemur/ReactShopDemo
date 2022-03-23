import { SET_DISPLAY_PRODUCT, BACK_TO_HOME_PAGE } from "./types";

export const displayProduct = (product) => {
    return {
        type: SET_DISPLAY_PRODUCT,
        payload: product,
    };
};

export const backToHomePage = () => {
    return {
        type: BACK_TO_HOME_PAGE,
    };
};