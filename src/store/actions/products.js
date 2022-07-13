import { SET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../constants";

const setProducts = (data) => (dispatch) => {

    dispatch({
        type: SET_PRODUCTS,
        payload: data
    })
}

const filterProducts = (filteredItems) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS,
        payload : filteredItems
    })
}

const searchProducts = (searchedProducts) => (dispatch) => {
    const action = {
        type: SEARCH_PRODUCTS,
        payload : searchedProducts
    }
    dispatch(action)
}

export {
    setProducts,
    filterProducts,
    searchProducts
}