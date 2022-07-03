
function Collection(props) {
    return(
        // Section
        <div className="section">
            {/*<!-- container --!> */}
            <div className="container">
                {/*<!-- row --!> */}
                <div className="row">
                    {/*<!-- shop --!> */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={`${props.CategoryImg1}`} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>{props.CategoryLabel1}<br />Collection</h3>
                                <a href="#" className="cta-btn">
                                    Shop Now <i className="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /shop --!> */}

                    {/*<!-- shop --!> */}
                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={`${props.CategoryImg2}`} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>{props.CategoryLabel2}<br />Colection</h3>
                                <a href="#" class="cta-btn">
                                    Shop Now <i className="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /shop --!> */}

                    <div className="col-md-4 col-xs-6">
                        <div className="shop">
                            <div className="shop-img">
                                <img src={`${props.CategoryImg3}`} alt="" />
                            </div>
                            <div className="shop-body">
                                <h3>{props.CategoryLabel3}<br />Colection</h3>
                                <a href="#" class="cta-btn">
                                    Shop Now <i className="fa fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*<!-- /shop --!> */}

                </div>
                {/*<!-- /row --!> */}
            </div>
            {/*<!-- /container --!> */}
        </div>
        // /Section
    )
}

export default Collection;