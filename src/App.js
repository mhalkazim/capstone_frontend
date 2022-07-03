import './App.css';
import Header from "./Header.js";
import Collection from "./Collection.js";
import NewProducts from "./NewProducts.js";
import Footer from "./Footer.js";
function App() {
  return (
    <div className="App">
      <Header />

      <Collection 
      CategoryLabel1 = "Laptop" 
      CategoryLabel2 = "Accessories"
      CategoryLabel3 = "Cameras"
      CategoryImg1 = "./img/shop01.png"
      CategoryImg2 = "./img/shop03.png"
      CategoryImg3 = "./img/shop02.png"
      />

      <NewProducts 
      CategoryLabel1 = "Laptops"
      CategoryLabel2 = "Smartphones"
      CategoryLabel3 = "Cameras"
      CategoryLabel4 = "Accessories"

      // Product #1
      ProductImg1 = "./img/product01.png"
      ProductSale1 = "30%"
      ProductCategory1 = "Category"
      ProductName1 = "product name goes here"
      ProductPrice1= "$980.00"
      ProductOldPrice1 = "$990.00"

      // Product #2
      ProductImg2 = "./img/product02.png"
      ProductSale2 = ""
      ProductCategory2 = "Category"
      ProductName2 = "product name goes here"
      ProductPrice2= "$980.00"
      ProductOldPrice2 = "$990.00"

      // Product #3
      ProductImg3 = "./img/product03.png"
      ProductSale3 = "30%"
      ProductCategory3 = "Category"
      ProductName3 = "product name goes here"
      ProductPrice3= "$980.00"
      ProductOldPrice3 = "$990.00"

      // Product #4
      ProductImg4 = "./img/product04.png"
      ProductSale4 = ""
      ProductCategory4 = "Category"
      ProductName4 = "product name goes here"
      ProductPrice4= "$980.00"
      ProductOldPrice4 = "$990.00"
      
      // Product #5
      ProductImg5 = "./img/product05.png"
      ProductSale5 = ""
      ProductCategory5 = "Category"
      ProductName5 = "product name goes here"
      ProductPrice5= "$980.00"
      ProductOldPrice5 = "$990.00"
      
      />

      <Footer />

    </div>
  );
}

export default App;
