import React from "react";

const Banner = () => {
    return(
      <div className="container-fluid">
        <div className="row max-height justify-content-center align-items-center">
          <div className="col-10 mx-auto banner text-center">
            <h1 className="text-capitalize">welcome to <strong className="banner-title ">grandma's</strong></h1>
            <a href="#store" className="btn banner-link text-uppercase my-2">explore</a>

          </div>
          <div id="cart" className="cart">

            <div className="cart-item d-flex justify-content-between text-capitalize my-3">
              <img src="img/z-cake-2.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
              <div className="item-text">

                <p id="cart-item-title" className="font-weight-bold mb-0">cart item</p>
                <p id="cart-item-price" className="mb-0">10.99</p>
              </div>
              <a href="#" id='cart-item-remove' className="cart-item-remove">
                <i className="fas fa-trash"></i>
              </a>
            </div>
            <div className="cart-item d-flex justify-content-between text-capitalize my-3">
              <img src="img/z-sweets-3.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
              <div className="cart-item-text">

                <p id="cart-item-title" className="font-weight-bold mb-0">cart item</p>
                <p id="cart-item-price" className="mb-0">10.99</p>
              </div>
              <a href="#" id='cart-item-remove' className="cart-item-remove">
                <i className="fas fa-trash"></i>
              </a>
            </div>
            <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
              <h5>total</h5>
              <h5> $ <strong id="cart-total" className="font-weight-bold">10.00</strong> </h5>
            </div>

            <div className="cart-buttons-container mt-3 d-flex justify-content-between">
              <a href="#" id="clear-cart" className="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
              <a href="#" className="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Banner