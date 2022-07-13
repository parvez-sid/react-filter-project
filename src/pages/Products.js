import React from "react";
import { useSelector } from "react-redux";

    const Products = ({uniqueItems, filterItems, searchItems, addToCart}) => {

    const { products } = useSelector((store) => {
      return {
        products: store.product.products
      }
    })

    const renderItems = () => {
      return (
        products.map((item) => {
          return(
            <div key={item.id} className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
              <div className="card ">
                  <div className="img-container">
                  <img src={require(`../assets/img/${item.image}`)} className="card-img-top store-img" alt="" />
                  <span className="store-item-icon" onClick={() => {addToCart(item)}}>
                      <i className="fas fa-shopping-cart"></i>
                  </span>
                  </div>
                  <div className="card-body">
                  <div className="card-text d-flex justify-content-between text-capitalize">
                      <h5 id="store-item-name">{item.title}</h5>
                      <h5 className="store-item-value">$ <strong id="store-item-price" className="font-weight-bold">{item.price}</strong></h5>
                  </div>
                  </div>
              </div>
            </div>
          )
        })
      )
    }
    
    return(
        <section id="store" className="store py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-sm-6 text-center">
                <h1 className="text-capitalize">our <strong className="banner-title ">store</strong></h1>
              </div>
            </div>
            <div className="row">
              <div className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
                <span className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter="all" onClick={(e) => {filterItems(e)}}> all</span>
                {
                  uniqueItems.map(item => {
                    return <span key={item} className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" data-filter={item} onClick={(e) => {filterItems(e)}}>{item}</span>
                  })
                }
              </div>
            </div>
            <div className="row">
      
              <div className="col-10 mx-auto col-md-6">
                <form>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend" style={{cursor : "pointer"}} onClick={() => {searchItems()}} >
                      <span className="input-group-text search-box" id="search-icon"><i className="fas fa-search"></i></span>
                    </div>
                    <input type="text" className="form-control" placeholder='item....' id="search-item" />
                  </div>
                </form>
              </div>
            </div>
            <div className="row" id="store-items">
              {renderItems()}
            </div>
          </div>
        </section>
    )
}
export default Products