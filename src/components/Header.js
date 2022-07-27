import React from "react";
import { useSelector } from "react-redux";
import logo from '../assets/img/logo.svg'
import { Link } from "react-router-dom";
import { scroll } from '../utilities/Utility'

const Header = ({ onRemoveCartItems }) => {

    const { carts } = useSelector((store) => {
        return {
          carts: store.product.carts
        }
    })

    const displayCartItems = () => {
        return carts.map((cart) => {
            console.log("cart ==> ", cart)
          return <div className="cart-item d-flex justify-content-between text-capitalize my-3" key={cart.id}>
          <img src={require(`../assets/img/${cart.image}`)} className="img-fluid" id="item-img" alt={cart.title} width="80" />
          <div className="item-text">

            <p id="cart-item-title" className="font-weight-bold mb-0">{cart.title}</p>
            <p id="cart-item-price" className="mb-0">{cart.price}</p>
          </div>
          <a href="#" id='cart-item-remove' className="cart-item-remove" onClick={(e)=> {{
            e.preventDefault();
            onRemoveCartItems(carts, cart.id);
          }
          }}>
            <i className="fas fa-trash"></i>
          </a>
        </div>
        })
    }

    let totalPrice = 0;
    totalPrice = carts.reduce((curr, item) => {
        return curr + item.price
    },0);

    const cartOpen = () => {
        if(!carts.length){
          return;
        }
        const element = document.getElementById("cart");
        element.classList.toggle("showCart");
    }

    return(
        <nav className="navbar navbar-expand-lg px-4">
        <Link className="navbar-brand" to={"/"}><img src={logo} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
            <span className="toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav mx-auto text-capitalize">
            <li className="nav-item active">
                <Link className="nav-link" to={"#"}>home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " to={"#"} onClick={(e) => {scroll(e,"about")}}>about</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"#"} onClick={(e) => {scroll(e, "store")}}>store</Link>
            </li>
            </ul>
            <div className="nav-info-items d-none d-lg-flex ">

            <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
                <p className="mb-0">+91-8090980909</p>
            </div>

            {carts.length ?
                <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5" onClick={cartOpen}>
                    <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                    <p className="mb-0 text-capitalize">
                        <span id="item-count"> {carts && carts.length} </span>
                        {carts.length > 1 ? "items" : "item"} - $<span className="item-total">
                            {totalPrice}
                    </span>
                    </p>
                </div>
            :
                <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
                    <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                    <p className="mb-0 text-capitalize">
                        <span id="item-count"> {carts && carts.length} </span>
                        {carts.length > 1 ? "items" : "item"} - $<span className="item-total">
                            {totalPrice}
                    </span>
                    </p>
                </div>
            }
            <div id="cart" className="cart position-absolute">

                {displayCartItems()}
                <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                    <h5>total</h5>
                    <h5> $ <strong id="cart-total" className="font-weight-bold">{totalPrice}</strong> </h5>
                </div>

                <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                    <span id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</span>
                    <span className="btn btn-outline-secondary text-uppercase btn-pink">checkout</span>
                </div>
            </div>
            </div>
        </div>
        </nav>
    )
}

export default Header