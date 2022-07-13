import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Products from "./Products";
import { setProducts, filterProducts, searchProducts} from "../store/actions/products";
import { dataItems } from "../json/data"

const Home = () => {

    const dispatch = useDispatch();
    const [cartItems, setCartItem] = useState([]);

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
    const searchItems = () => {
        const value = document.getElementById("search-item").value
        value.toLowerCase().trim();
        dispatch(searchProducts(dataItems, value))
    }

    const addToCart = (item) => {
      setCartItem([...cartItems, item])
    }
    
    return(
        <>
          <Header cartData={cartItems} />
          <Banner />
          <About />
          <Products
            uniqueItems={uniqueItems}
            filterItems={filterItems}
            searchItems={searchItems}
            addToCart={addToCart}
          />
        </>
    )
}

export default Home