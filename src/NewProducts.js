function NewProducts(props){
    return(
        // Section
        <div className="section">
            {/* <!-- container --!>*/}
            <div className="container">
                {/* <!-- row --!>*/}
                <div className="row">
                    {/* <!-- section title --!>*/}
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="title">New Products</h3>
                            <div className="section-nav">
                                <ul className="section-tab-nav tab-nav">
                                    <li className="active">
                                        <a data-toggle="tab" href="#tab1">{props.CategoryLabel1}</a>
                                    </li>
                                    <li><a data-toggle="tab" href="#tab1">{props.CategoryLabel2}</a></li>
                                    <li><a data-toggle="tab" href="#tab1">{props.CategoryLabel3}</a></li>
                                    <li><a data-toggle="tab" href="#tab1">{props.CategoryLabel4}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /section title --!>*/}

                    {/* <!-- Products tab & slick --!>*/}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="products-tabs">
                                {/* <!-- tab --!>*/}
                                <div id="tab1" className="tab-pane active">
                                    <div className="products-slick" data-nav="#slick-nav-1">
                                        {/* <!-- product 1 --!>*/}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src={`${props.ProductImg1}`} alt="" />
                                                <div className="product-label">
                                                    {props.ProductSale1 &&  
                                                    <span className="sale">{props.ProductSale1}</span>
                                                    }
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{props.ProductCategory1}</p>
                                                <h3 className="product-name">
                                                    <a href="#">{props.ProductName1}</a>
                                                </h3>
                                                <h4 className="product-price">
                                                    {props.ProductPrice1} <del className="product-old-price">{props.ProductOldPrice1}</del>
                                                </h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist">
                                                        <i className="fa fa-heart-o"></i>
                                                        <span className="tooltipp">add to wishlist</span>
                                                    </button>
                                                    <button className="add-to-compare">
                                                        <i className="fa fa-exchange"></i>
                                                        <span className="tooltipp">add to compare</span>
                                                    </button>
                                                    <button className="quick-view">
                                                        <i className="fa fa-eye"></i>
                                                        <span className="tooltipp">quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn">
                                                    <i className="fa fa-shooping-cart"></i> add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- product 1 --!>*/}

                                        {/* <!-- product 2 --!>*/}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src={`${props.ProductImg2}`} alt="" />
                                                <div className="product-label">
                                                    {props.ProductSale2 &&  
                                                    <span className="sale">{props.ProductSale2}</span>
                                                    }
                                                    <span className="new">NEW</span>
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{props.ProductCategory2}</p>
                                                <h3 className="product-name">
                                                    <a href="#">{props.ProductName2}</a>
                                                </h3>
                                                <h4 className="product-price">
                                                    {props.ProductPrice2} <del className="product-old-price">{props.ProductOldPrice2}</del>
                                                </h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist">
                                                        <i className="fa fa-heart-o"></i>
                                                        <span className="tooltipp">add to wishlist</span>
                                                    </button>
                                                    <button className="add-to-compare">
                                                        <i className="fa fa-exchange"></i>
                                                        <span className="tooltipp">add to compare</span>
                                                    </button>
                                                    <button className="quick-view">
                                                        <i className="fa fa-eye"></i>
                                                        <span className="tooltipp">quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn">
                                                    <i className="fa fa-shooping-cart"></i> add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- product 2 --!>*/}

                                        {/* <!-- product 3 --!>*/}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src={`${props.ProductImg3}`} alt="" />
                                                <div className="product-label">
                                                    {props.ProductSale3 &&  
                                                    <span className="sale">{props.ProductSale3}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{props.ProductCategory3}</p>
                                                <h3 className="product-name">
                                                    <a href="#">{props.ProductName3}</a>
                                                </h3>
                                                <h4 className="product-price">
                                                    {props.ProductPrice3}<del className="product-old-price">{props.ProductOldPrice3}</del>
                                                </h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist">
                                                        <i className="fa fa-heart-o"></i>
                                                        <span className="tooltipp">add to wishlist</span>
                                                    </button>
                                                    <button className="add-to-compare">
                                                        <i className="fa fa-exchange"></i>
                                                        <span className="tooltipp">add to compare</span>
                                                    </button>
                                                    <button className="quick-view">
                                                        <i className="fa fa-eye"></i>
                                                        <span className="tooltipp">quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn">
                                                    <i className="fa fa-shooping-cart"></i> add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- product 3 --!>*/}

                                        {/* <!-- product 4 --!>*/}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src={`${props.ProductImg4}`} alt="" />
                                                <div className="product-label">
                                                    {props.ProductSale4 &&  
                                                    <span className="sale">{props.ProductSale4}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{props.ProductCategory4}</p>
                                                <h3 className="product-name">
                                                    <a href="#">{props.ProductName4}</a>
                                                </h3>
                                                <h4 className="product-price">
                                                    {props.ProductPrice4}<del className="product-old-price">{props.ProductOldPrice4}</del>
                                                </h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist">
                                                        <i className="fa fa-heart-o"></i>
                                                        <span className="tooltipp">add to wishlist</span>
                                                    </button>
                                                    <button className="add-to-compare">
                                                        <i className="fa fa-exchange"></i>
                                                        <span className="tooltipp">add to compare</span>
                                                    </button>
                                                    <button className="quick-view">
                                                        <i className="fa fa-eye"></i>
                                                        <span className="tooltipp">quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn">
                                                    <i className="fa fa-shooping-cart"></i> add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- product 4 --!>*/}
                                        
                                        {/* <!-- product 5 --!>*/}
                                        <div className="product">
                                            <div className="product-img">
                                                <img src={`${props.ProductImg5}`} alt="" />
                                                <div className="product-label">
                                                    {props.ProductSale5 &&  
                                                    <span className="sale">{props.ProductSale5}</span>
                                                    }
                                                </div>
                                            </div>
                                            <div className="product-body">
                                                <p className="product-category">{props.ProductCategory5}</p>
                                                <h3 className="product-name">
                                                    <a href="#">{props.ProductName5}</a>
                                                </h3>
                                                <h4 className="product-price">
                                                    {props.ProductPrice5}<del className="product-old-price">{props.ProductOldPrice5}</del>
                                                </h4>
                                                <div className="product-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="product-btns">
                                                    <button className="add-to-wishlist">
                                                        <i className="fa fa-heart-o"></i>
                                                        <span className="tooltipp">add to wishlist</span>
                                                    </button>
                                                    <button className="add-to-compare">
                                                        <i className="fa fa-exchange"></i>
                                                        <span className="tooltipp">add to compare</span>
                                                    </button>
                                                    <button className="quick-view">
                                                        <i className="fa fa-eye"></i>
                                                        <span className="tooltipp">quick view</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="add-to-cart">
                                                <button className="add-to-cart-btn">
                                                    <i className="fa fa-shooping-cart"></i> add to cart
                                                </button>
                                            </div>
                                        </div>
                                        {/* <!-- product 5 --!>*/}
                                    </div>
                                    <div id="slick-nav-1" className="products-slick-nav"></div>
                                </div>
                                {/* <!-- /tab --!>*/}
                            </div>
                        </div>
                    </div>
                    {/* <!-- /products tab & slick--!>*/}
                </div>
                {/* <!-- /row--!>*/}
            </div>
            {/* <!-- /container --!>*/}
        </div>
        
    
    )
}

export default NewProducts;