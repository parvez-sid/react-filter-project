import React from "react";
import { useSelector } from "react-redux";
import logo from '../assets/img/logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { scroll } from '../utilities/Utility'

const Header = ({}) => {

    const { carts } = useSelector((store) => {
        return {
          carts: store.product.carts
        }
    })

    console.log("carts",carts);
    let totalPrice = 0;
    totalPrice = carts.reduce((curr, item) => {
        return curr + item.price
    },0);

    const navigate = useNavigate();

    const redirectToCartLanding = (cart) => {
        navigate('/cart', {state : cart})
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
                <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5" onClick={() => {redirectToCartLanding(carts)}}>
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

            </div>
        </div>
        </nav>
    )
}

export default Header