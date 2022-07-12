import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const { state } = location
    console.log(state);

    const displayItems = () => {
        return state && state.length && state.map(item => {
            return(
                <div key={item.id} className="cart-item d-flex justify-content-between text-capitalize my-3">
                    <img src={require(`../assets/img/${item.image}`)} height={200} width={200} className="img-fluid img-thumbnail" id="item-img" alt="" />
                    <div className="item-text">
                        <p id="cart-item-title" className="font-weight-bold mb-0">{item.title}</p>
                        <p id="cart-item-price" className="mb-0">{item.price}</p>
                    </div>
                    <a href="#" id='cart-item-remove' className="cart-item-remove" rel="noopener noreferrer">
                        <i className="fas fa-trash"></i>
                    </a>
                </div>
            )
        })
    }

    return(
        <div id="checkout" className="container-fluid">
            <h1>
                checkout
            </h1>
            {
                displayItems()
            }
        </div>
    )
}

export default Checkout