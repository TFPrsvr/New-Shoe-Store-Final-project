import React, { useState } from "react";
import "../CartDD/CartDD.css";
import trash from "../assets/icon-delete.svg";
import cart from "../assets/icon-cart.svg";
import productData from "../assets/product.json";
import Img1 from "../assets/image-product-1-thumbnail.jpg";
import close from "../assets/icon-close.svg";

const CartDD = ({
  quantity,
  images = [],
  setQuantity,
  toggleCartVisible,
  item,
}) => {
  // const [cart, setCart] = useState([])
  // const [viewCart, setViewCart] = useState(false)
  const [isCartVisible, setIsCartVisible] = useState(false);

  //   const addToCart = () => {
  //     if (quantity > 0) {
  //         handleCartSubmit();
  //         setCartItems((prevItems) => [
  //             ...prevItems,
  //             { ...cartItems, quantity }
  //         ]);
  //     }
  // };

  const addToCart = (product) => {
    // setCartItems([...cartItems, product])
    setQuantity(quantity);
    setIsCartVisible(true);
  };

  // const handleDelete = (itemId) => {
  //   setCart(prevCart => prevCart.filter(item => item.id !== item.id));
  // }

  const discountPrice = productData.product.price / 2;
  const totalPrice = discountPrice.toFixed(2) * quantity;

  const handleDelete = () => {
    console.log("handleDelete works");
    setQuantity(0);
  };

  const handleCheckout = () => {
    alert("Thank You for your Order");
  };

  return (
    <div className="CartDDCont">
      {console.log("totalPrice:", totalPrice)}
      {console.log("discountPrice:", discountPrice)}

      {/* <button className="closeBtn" onClick={toggleCartVisible}>
          <img src={close} className="closeIcon" alt="Cart" />
        </button> */}

      <h4 className="noShow">Cart</h4>
      <div className="flex">
        {quantity > 0 ? (
          <>
            <p className="item">
              <img
                src={Img1}
                alt="cart item"
                style={{ height: "55px", width: "55px" }}
              />
            </p>

            <p className="productTitle">{productData.product.title}</p>

            <p className="cartInfo">
              {" "}
              ${discountPrice.toFixed(2)} x {quantity}{" "}
            </p>
            <p className="ddQuant"> ${totalPrice}.00</p>

            <button className="trash" onClick={handleDelete}>
              <img src={trash} alt="delete item" className="trash" />
            </button>

            <button className="checkout" onClick={handleCheckout}>
              Checkout
            </button>
          </>
        ) : (
          <p className="emptyCart">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartDD;
