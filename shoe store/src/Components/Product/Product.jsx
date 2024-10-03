import React, { useState } from "react";
import "./Product.css";
import Cart from "../Cart/Cart";
import productData from "../assets/product.json";

const Product = ({
  quantity,
  setQuantity,
  toggleCartVisible,
  handleCartSubmit,
}) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const productDiscount = productData.product.price / 2;

  const productInfo = {
    title: productData.product.title,
    price: productData.product.price,
    discountedPrice: productDiscount,
  };

  // const addToCart = () => {
  //   if (quantity > 0) {
  //     handleCartSubmit({ ...productInfo, quantity });
  //     setQuantity(0); // Reset quantity after adding to cart
  //   } else {
  //     alert("Please select a quantity.");
  //   }
  // };

  const addToCart = () => {
    setIsCartVisible(true)
    console.log('addToCart works')
    // if (quantity > 0) {
    // return (
    // setIsCartVisible(true)
    //  <div className='quant0' style={{height: '30px'
    // width: '90px', backgroundColor: 'white', color: 'white',
    // }}    )
    // }
      }

  const toggleCartVis = () => {
    setIsCartVisible(!isCartVisible)
  }

  return (
    <div className="product">
      {/* {console.log("Props in Product:", {
        quantity,
        setQuantity,
        handleCartSubmit,
      })} */}
      {/* {console.log("productInfo:", productInfo)} */}
      


      <div className="info">
        <div className="SCo">SNEAKER COMPANY</div>

        <div className="title">{productData.product.title}</div>

        <div className="desc">{productData.product.description}</div>
      </div>

      <div className="priceNav">
        <div className="price">${productDiscount}.00</div>

        <div className="saleOff">{productData.product.saleOff}%</div>

        <div className="empty"></div>

        <div className="priceOG">${productData.product.price}.00</div>
      </div>

      <div className="cart">
        <Cart
          quantity={quantity}
          setQuantity={setQuantity}
          toggleCartVisible={toggleCartVisible}
          handleCartSubmit={handleCartSubmit}
          addToCart={addToCart}
          productInfo={productInfo}
        />
      </div>
    </div>
  );
};

export default Product;
