import {
    SET_PRODUCTS, FILTER_PRODUCTS,
    SEARCH_PRODUCTS , ADD_TO_CART,
    REMOVE_CART,
    CHECKOUT_DATA
} from "../constants"

const initialState = {
    products:[],
    carts: []
}

const productReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_PRODUCTS:
        case FILTER_PRODUCTS:
        case SEARCH_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case ADD_TO_CART: {
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        }
        case REMOVE_CART:
        case CHECKOUT_DATA: {
            return {
                ...state,
                carts: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default productReducer