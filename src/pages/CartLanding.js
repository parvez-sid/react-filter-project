import React from "react";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';

const Cart = () => {
    const location = useLocation();
    const { state } = location;

    return(
        <>
            <Header cartData={state}/>
            <div id="cart" className="container-fluid">
                {state && state.length && state.map(item => {
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
                })}
                <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                <h5>total</h5>
                <h5> $ <strong id="cart-total" className="font-weight-bold">10.00</strong> </h5>
                </div>

                <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                <a href="#" rel="noopener noreferrer" id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
                <a href="#" rel="noopener noreferrer" className="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
                </div>
            </div>
        </>
    )
}

export default Cart