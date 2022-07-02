function Header() {
  return (
    <header>
      {/* <!-- NAVIGATION --> */}
      <nav id="navigation">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- responsive-nav --> */}
          <div id="responsive-nav">
            {/* <!-- NAV --> */}
            <ul className="main-nav nav navbar-nav">
              <li className="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">
                  <strong>Browse Listings </strong>
                </a>
              </li>
              <li>
                <a href="#">
                  <strong>List My Item&nbsp;</strong>
                </a>
              </li>
              <li>
                <a href="#"> Laptops</a>
              </li>
              <li>
                <a href="#">Smartphones</a>
              </li>
              <li>
                <a href="#">Cameras</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
            {/* <!-- /NAV --> */}
          </div>
          {/* <!-- /responsive-nav --> */}
          <div className="pull-right">
            <button type="button" className="primary-btn">
              Login
            </button>
            <button type="button" className="secondary-btn">
              Signup
            </button>
          </div>
        </div>
        {/* <!-- /container --> */}
      </nav>
      {/* <!-- /NAVIGATION --> */}

      {/* <!-- MAIN HEADER --> */}
      <div id="header">
        {/* <!-- container --> */}
        <div className="container">
          {/* <!-- row --> */}
          <div className="row">
            {/* <!-- LOGO --> */}
            <div className="col-md-3">
              <div className="header-logo">
                <a href="#" className="logo">
                  <img src="./img/logo2.png" alt="" />
                </a>
              </div>
            </div>
            {/* <!-- /LOGO --> */}

            {/* <!-- SEARCH BAR --> */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    <option value="0">All Categories</option>
                    <option value="1">Category 01</option>
                    <option value="1">Category 02</option>
                  </select>
                  <input className="input" placeholder="Search here" />
                  <button className="search-btn">Search</button>
                </form>
              </div>
            </div>
            {/* <!-- /SEARCH BAR --> */}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!-- /MAIN HEADER --> */}
    </header>
    // <!-- /HEADER -->
  );
}
export default Header;
