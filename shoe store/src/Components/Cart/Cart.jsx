import React, { useState } from "react";
import "../Cart/Cart.css";
import productData from "../assets/product.json";
import CartDD from "../CartDD/CartDD";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import cart2 from "../assets/cart2.svg";

const Cart = ({
  quantity,
  setQuantity,
  item,
  product,
  handleCartSubmit,
  productInfo,
  addToCart,
}) => {
  
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // const addToCart = () => {
  //   handleCartSubmit({ ...product,quantity})

  //   setQuantity(0)
  // }

  // const addToCart = () => {
  //  setCartItems([ ...cart, { ...item, quantity}])
  //  setQuantity(quantity)
  // }

  // const addToCart = (item) => {
  //   setCartItems([ ...cart, { ...item, quantity}])
  //   setQuantity(quantity)
  // setIsCartVisible(true)
  // }

  //   const addToCart = () => {
  //     if (quantity > 0) {
  //         handleCartSubmit();
  //         setCartItems((prevItems) => [
  //             ...prevItems,
  //             { ...cartItems, quantity }
  //         ]);
  //     }
  // };

  const toggleCartVis = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="cartComp">
      {console.log("addToCart:", addToCart)}

      <div
        className="incrementor">

        <button
          className="minusBtn"
          onClick={handleMinus}>
          
          <img
            src={minus}
            className="minusBtn"
            alt="decrease quantity"
            style={{
             backgroundColor: "hsl(220, 14%, 75%, 0.25)",
            }}/>

        </button>

        <div className="quantity">{quantity}</div>

        <button className="plusBtn"
          onClick={handlePlus}>
          
          <img
            src={plus}
            className="plusBtn"
            style={{backgroundColor: "hsl(220, 14%, 75%, 0.25)"}}
            alt="increase quantity" />
        </button>
      
      </div>

      <div className="Cart">
      
        <button className="add2Cart" onClick={addToCart}>
      
          <img
            src={cart2}
            className="addCart"
            alt="add to cart"
            style={{ height: "15px", width: "15px" }}/>
          &nbsp; &nbsp; Add to Cart
        </button>

      </div>

      <div className="CartDD">
        
        {isCartVisible && (
          <CartDD
            // cart={cart}
            onClose={isCartVisible}
            quantity={quantity}
            setQuantity={setQuantity}
            productInfo={[productInfo]}
            addToCart={addToCart}
          />)}

      </div>
    </div>
  );
};

export default Cart;
