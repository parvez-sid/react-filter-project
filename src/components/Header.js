import React from "react";
import logo from '../assets/img/logo.svg'
import { Link } from "react-router-dom";

const Header = ({ cartData }) => {

    const scroll = (e, id) => {
        e.preventDefault()
        const element = document.getElementById(id);
        element.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

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

            <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
                <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                <p className="mb-0 text-capitalize"><span id="item-count">
                    {cartData && cartData.count} </span> items - $<span className="item-total">
                        {cartData && cartData.displayCart()}
                        </span>
                </p>
            </div>

            </div>
        </div>
        </nav>
    )
}

export default Header