import React, { useEffect } from "react";

const Products = (props) => {
    const { filterItems, renderHtml } = props;

    useEffect(() => {
        renderHtml(null, true)
    },[])
    
    return(
        <section id="store"  className="store py-5">
            <div  className="container">
                <div  className="row">
                    <div  className="col-10 mx-auto col-sm-6 text-center">
                    <h1  className="text-capitalize">our <strong  className="banner-title ">store</strong></h1>
                    </div>
                </div>

                <div  className="row">
                    <div  className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
                    <a href="#"  className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="all" onClick={(e) => {filterItems(e)}}>all</a>
                    <a href="#"  className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cakes" onClick={(e) => {filterItems(e)}}>cakes</a>
                    <a href="#"  className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="cupcakes" onClick={(e) => {filterItems(e)}}>cupcakes</a>
                    <a href="#"  className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="sweets" onClick={(e) => {filterItems(e)}}>sweets</a>
                    <a href="#"  className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="doughnuts" onClick={(e) => {filterItems(e)}}>doughnuts</a>
                    </div>
                </div>

                <div  className="row">

                    <div  className="col-10 mx-auto col-md-6">
                    <form>
                        <div  className="input-group mb-3">
                        {/* <div  className="input-group-prepend " onclick="searchItemsByQuery()" > */}
                        <div  className="input-group-prepend ">
                            <span  className="input-group-text search-box" id="search-icon" ><i  className="fas fa-search"></i></span>
                        </div>
                        {/* <input type="text"  className="form-control" placeholder='item....' id="search-item"  onKeyPress={searchFilter2(this.value)} /> */}
                        <input type="text"  className="form-control" placeholder='item....' id="search-item" />
                        </div>
                        <span  className="text-danger" style={{display : "none"}} id="message" ></span>
                    </form>
                    </div>
                </div>
                
                <div className="row" id="store-items"></div>
            </div>
        </section>
    )
}
export default Products