import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Products from "./Products";
import { sweetErrAlert } from '../utilities/Utility';

const dataItems = [
  {
    id: 1,
    image: "sweets-1.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 5,
  },
  {
    id: 2,
    image: "cupcake-1.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 5,
  },
  {
    id: 3,
    image: "cake-1.jpeg",
    title: "cake item",
    type: "cakes",
    price: 5,
  },
  {
    id: 4,
    image: "doughnut-1.jpeg",
    title: "dougnut item",
    type: "doughnuts",
    price: 5,
  },
  {
    id: 5,
    image: "sweets-2.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 10,
  },
  {
    id: 6,
    image: "cupcake-2.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 10,
  },
  {
    id: 7,
    image: "cake-2.jpeg",
    title: "cake item",
    type: "cakes",
    price: 10,
  },
  {
    id: 8,
    image: "doughnut-2.jpeg",
    title: "dougnut item",
    type: "doughnuts",
    price: 10,
  },
  {
    id: 9,
    image: "sweets-3.jpeg",
    title: "sweet item",
    type: "sweets",
    price: 15,
  },
  {
    id: 10,
    image: "cupcake-3.jpeg",
    title: "cupcake item",
    type: "cupcakes",
    price: 15,
  },
  {
    id: 11,
    image: "cake-3.jpeg",
    title: "cake item",
    type: "cakes",
    price: 15,
  },
  {
    id: 12,
    image: "doughnut-3.jpeg",
    title: "doughnut item",
    type: "doughnuts",
    price: 15,
  }
];

const Home = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      setItems(dataItems)
    }, [])

    // distinct items
    const uniqueItems = [...new Set(dataItems.map(item => item.type))];

    // filter items
    const filterItems = (event) => {
        event.preventDefault()
        const filter = event.target.dataset && event.target.dataset.filter;
        const filteredItems = filter === "all" ? dataItems : dataItems.filter((item) => item.type === filter);
        setItems(filteredItems)
    };

    // search item by keyword
    const searchItems = () => {
        const value = document.getElementById("search-item").value
        value.toLowerCase().trim();

        if(value === "") {
          sweetErrAlert('Please write something to search...', 'Ok')
        }

        let filteredItems = dataItems.filter((item) => item.type.includes(value));
        if(filteredItems.length === 0) {sweetErrAlert('No items to show with this keyword!', 'Ok')}
        setItems(filteredItems)
    }

    const addToCart = (item) => {
      setCartItems([...cartItems, item])
    }

    const removeCartItems = (id) => {
      const items = cartItems.filter((item) => item.id !== id);
      setCartItems(items)
    }
    
    return(
        <>
          <Header cartData={cartItems} onRemoveCartItems={removeCartItems} />
          <Banner />
          <About />
          <Products
            uniqueItems={uniqueItems}
            dataItems={items}
            filterItems={filterItems}
            searchItems={searchItems}
            addToCart={addToCart}
          />
        </>
    )
}

export default Home