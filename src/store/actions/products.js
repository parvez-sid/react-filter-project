import { SET_PRODUCTS, FILTER_PRODUCTS, SEARCH_PRODUCTS } from "../constants";
import {sweetErrAlert} from '../../utilities/Utility';

const setProducts = (data) => (dispatch) => {

    try {
        dispatch({
            type: SET_PRODUCTS,
            payload: data
        })
    } catch (error) {
        console.log(err);
    }
}

const filterProducts = (items, filter) => (dispatch) => {
    try{
        const filteredItems = filter === "all" ? items : items.filter((item) => item.type === filter);
    
        dispatch({
            type: FILTER_PRODUCTS,
            payload : filteredItems
        })
    }
    catch(err) {
        console.log(err);
    }
    
}

const searchProducts = (items, value) => (dispatch) => {
    try {
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
    } catch (error) {
        console.log(err);
    }
}

export {
    setProducts,
    filterProducts,
    searchProducts
}