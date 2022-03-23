import { SET_PRODUCTS, DELETE_PRODUCTS } from "./types";
const shortid = require('shortid');

export const addProductToCart = (cart, product, quantity) => {
    let output = cart.filter((item) => item.id == product.id);
    let tmpCart = [];

    if (output.length > 0) {
        let qty = Number(output[0].quantity) + Number(quantity);
        output[0]["quantity"] = qty;

        cart.map((el) => {
            if (el.id != output[0].id) {
                tmpCart.push(el);
            }
        })

        tmpCart.push(output[0]);
        cart = tmpCart
    } else {
        product["shortId"] = shortid.generate();
        product["quantity"] = quantity;
        cart.push(product);
    }

    return {
        type: SET_PRODUCTS,
        payload: cart,
    };
};

export const deleteProductFromCart = (cart, shortId) => {
    let output = cart.filter((item) => item.shortId !== shortId);

    if (output.length == 0) {
        return {
            type: DELETE_PRODUCTS,
        };
    } else {
        return {
            type: SET_PRODUCTS,
            payload: output,
        };
    }
};

export const editProductQuantity = (cart, quantity, shortId) => {
    let output = cart.filter((item) => item.shortId == shortId);
    let tmpCart = [];

    if (output.length > 0) {
        output[0]["quantity"] = quantity;

        cart.map((el) => {
            if (el.id != output[0].id) {
                tmpCart.push(el);
            }
        })

        tmpCart.push(output[0]);
        cart = tmpCart
    }

    return {
        type: SET_PRODUCTS,
        payload: cart,
    };
};

export const removeProductFromCart = () => {
    return {
        type: DELETE_PRODUCTS,
    };
};