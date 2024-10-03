import React, { useState } from "react";
import Product from "./Components/Product/Product";
import productData from "../src/Components/assets/product.json";
import Header from "./Components/Header/Header";
import Gallery from "./Components/Gallery/Gallery";
import CartDD from './Components/CartDD/CartDD'
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [image, setImage] = useState(Array.indexOf);

  // const handleCartSubmit = (product) => {
  //   product = cartItems
  //   setCartItems([...cartItems, { quantity }]);
  // console.log('cartItems:', cartItems)
  // };

  //   const handleCartSubmit = (product) => {
  //     setCartItems([...cartItems, product]);
  //     console.log('Cart Items:', cartItems); // Log current cart items
  // };

  const addToCart = () => {
    setIsCartVisible(true);
  };

  const toggleCartVisible = () => {
    setIsCartVisible(!isCartVisible);
    console.log("cartVisible:", isCartVisible);
  };

  return (
    <>
      <div className="AppCont">
        <div className="headerCont">
          <Header quantity={quantity} toggleCartVisible={toggleCartVisible} />
        </div>

        <div className="galProdCont">
          <div className="galleryCont">
            <Gallery image={image} />
          </div>

          <div className="productCont">
            <Product
              quantity={quantity}
              setQuantity={setQuantity}
              addToCart={addToCart}
              // toggleCartVisible={toggleCartVisible}
              // handleCartSubmit={handleCartSubmit}
            />
          </div>
          {isCartVisible && (
            <CartDD quantity={quantity} setQuantity={setQuantity} />
          )}
        </div>

        {/* <div className='CartCont'>
  <Cart />
</div> */}
      </div>
    </>
  );
}

export default App;
