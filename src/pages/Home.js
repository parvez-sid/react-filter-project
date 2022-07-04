import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Products from "./Products";

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

    useEffect(() => {
      setItems(dataItems)
    }, [])

    const filterItems = (event) => {
        const filter = event.target.dataset && event.target.dataset.filter;
        const filteredItems = filter === "all" ? dataItems : dataItems.filter((item) => item.type === filter);
        setItems(filteredItems)
    };

    const searchItems = () => {
        const value = document.getElementById("search-item").value
        value.toLowerCase().trim()

        let filteredItems = dataItems.filter((item) => item.type.includes(value));
        if(value === "") {
          alert('Please write something to search...')
        }
        setItems(filteredItems)
    }
    
    return(
        <>
          <Header />
          <Banner />
          <About />
          <Products dataItems={items} filterItems={filterItems} searchItems={searchItems} />
        </>
    )
}

export default Home