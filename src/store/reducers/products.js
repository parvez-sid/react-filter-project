import {
    SET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS
} from "../constants"

const initialState = {
    products:[]
}

const productReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_PRODUCTS: {
            return {
              products: action.payload
            }
        }
        case FILTER_PRODUCTS : {
            return {
                products : action.payload
            }
        }
        case SEARCH_PRODUCTS: {
            return {
                products: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default productReducer