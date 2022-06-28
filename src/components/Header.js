import React from "react";
import logo from '../assets/img/logo.svg'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg px-4">
        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNav">
            <span className="toggler-icon"><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="myNav">
            <ul className="navbar-nav mx-auto text-capitalize">
            <li className="nav-item active">
                <a className="nav-link" href="#">home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link " href="#">about</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">store</a>
            </li>
            </ul>
            <div className="nav-info-items d-none d-lg-flex ">

            <div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
                <span className="info-icon mx-lg-3"><i className="fas fa-phone"></i></span>
                <p className="mb-0">+ 123 456 789</p>
            </div>


            <div id="cart-info" className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
                <span className="cart-info__icon mr-lg-3"><i className="fas fa-shopping-cart"></i></span>
                <p className="mb-0 text-capitalize"><span id="item-count">2 </span> items - $<span className="item-total">10.49</span></p>
            </div>

            </div>
        </div>
        </nav>
    )
}

export default Header