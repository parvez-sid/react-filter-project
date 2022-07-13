import { SET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../constants";
import {sweetErrAlert} from '../../utilities/Utility';

const setProducts = (data) => (dispatch) => {

    dispatch({
        type: SET_PRODUCTS,
        payload: data
    })
}

const filterProducts = (items, filter) => (dispatch) => {
    
    const filteredItems = filter === "all" ? items : items.filter((item) => item.type === filter);
    
    dispatch({
        type: FILTER_PRODUCTS,
        payload : filteredItems
    })
}

const searchProducts = (items, value) => (dispatch) => {
    if(value === "") {
        sweetErrAlert('Please write something to search...', 'Ok')
    }

    const searchedItems = items.filter((item) => item.type.includes(value));
    if(searchedItems.length === 0) {sweetErrAlert('No items to show with this keyword!', 'Ok')}
    const action = {
        type: SEARCH_PRODUCTS,
        payload : searchedItems
    }
    dispatch(action)
}

export {
    setProducts,
    filterProducts,
    searchProducts
}