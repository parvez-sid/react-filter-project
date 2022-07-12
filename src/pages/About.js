import React from "react";
import { Link } from "react-router-dom";
import SweetImg from '../assets/img/sweets-1.jpeg'

const About = () => {
    return(
        <section className="about py-5" id="about">
            <div className="container">

            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-5">
                <h1 className="text-capitalize">about <strong className="banner-title ">us</strong></h1>
                <p className="my-4 text-muted w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
                    beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                    porro at dolorum! Ad!</p>
                <Link to="/about" className="btn btn-outline-secondary btn-black text-uppercase ">explore</Link>
                </div>
                <div className="col-10 mx-auto col-md-6 align-self-center my-5">
                <div className="about-img__container">
                    <img src={SweetImg} className="img-fluid" alt="" />
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default About