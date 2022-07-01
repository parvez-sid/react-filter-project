import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "./About";
import Products from "./Products";

const Home = () => {
    const dataItems = [
        {
          image: "sweets-1.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 5,
        },
        {
          image: "cupcake-1.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 5,
        },
        {
          image: "cake-1.jpeg",
          title: "cake item",
          type: "cakes",
          price: 5,
        },
        {
          image: "doughnut-1.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 5,
        },
        {
          image: "sweets-2.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 10,
        },
        {
          image: "cupcake-2.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 10,
        },
        {
          image: "cake-2.jpeg",
          title: "cake item",
          type: "cakes",
          price: 10,
        },
        {
          image: "doughnut-2.jpeg",
          title: "dougnut item",
          type: "doughnuts",
          price: 10,
        },
        {
          image: "sweets-3.jpeg",
          title: "sweet item",
          type: "sweets",
          price: 15,
        },
        {
          image: "cupcake-3.jpeg",
          title: "cupcake item",
          type: "cupcakes",
          price: 15,
        },
        {
          image: "cake-3.jpeg",
          title: "cake item",
          type: "cakes",
          price: 15,
        },
        {
          image: "doughnut-3.jpeg",
          title: "doughnut item",
          type: "doughnuts",
          price: 15,
        }
    ];

    // const filterItems = (event) => {
    //     const filter = event.target.textContent;
    //     const filteredItems = dataItems.filter((item) => item.type === filter);
    //     renderHtml(filteredItems, false);
    // };
      
    // const renderHtml = (data = [], renderInitial= false) => {
    //     let renderedHtml = "";
    //     const items = renderInitial ? dataItems :data ;
    //     for (let item of items) {
    //       renderedHtml += `<div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item ${item.type}" data-item="${item.type}">
    //         <div className="card ">
    //           <div className="img-container">
    //             <img src="../assets/img/${item.image}" className="card-img-top store-img" alt="">
    //             <span className="store-item-icon" onclick="addtoCart(${item.price})">
    //               <i className="fas fa-shopping-cart"></i>
    //             </span>
    //           </div>
    //           <div className="card-body">
    //             <div className="card-text d-flex justify-content-between text-capitalize">
    //               <h5 id="store-item-name">${item.title}</h5>
    //               <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">${item.price}</strong></h5>
    //             </div>
    //           </div>
    //         </div>
    //       </div>`;
    //     }
    //     document.getElementById("store-items").innerHTML = renderedHtml;
    // }
    ;
    return(
        <>
          <Header />
          <Banner />
          <About />
          {/* <Products filterItems={filterItems} renderHtml={renderHtml} /> */}
          <Products dataItems={dataItems} />
        </>
    )
}

export default Home