import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Products from "./Products";
import {sweetErrAlert} from '../utilities/Utility';
import { setProducts, filterProducts, searchProducts, addToCart} from "../store/actions/products";
import { dataItems } from "../json/data"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setProducts(dataItems))
    }, [dispatch])

    // distinct items
    const uniqueItems = [...new Set(dataItems.map(item => item.type))];

    // filter items
    const filterItems = (event) => {
        event.preventDefault()
        const filter = event.target.dataset && event.target.dataset.filter;
        dispatch(filterProducts(dataItems, filter))
    };

    // search item by keyword
    const searchItems = (value) => {
        value.toLowerCase().trim();
        if(value === "") {
          sweetErrAlert('Please write something to search...', 'Ok')
        }
        dispatch(searchProducts(dataItems, value))
    }

    const addItemToCart = (item) => {
      dispatch(addToCart(item))
    }
    
    return(
        <>
          <Header />
          <Banner />
          <About />
          <Products
            uniqueItems={uniqueItems}
            filterItems={filterItems}
            searchItems={searchItems}
            addToCart={addItemToCart}
          />
        </>
    )
}

export default Home