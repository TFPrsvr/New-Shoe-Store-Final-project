import React, { useState } from "react";
import HCSS from "./Header.module.css";
import CartDD from "../CartDD/CartDD";
import Nav from "../Nav/Nav";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";

const Header = ({ quantity, toggleCartVisible }) => {
  // const [isCartVisible, setIsCartVisible] = useState(false)

  const addToCart = (product) => {
    setQuantity(quantity + quantity);
    // setCartItems([...cartItems, product])
    setIsCartVisible(true);
  };

  // const toggleCartVisible = () => {
  //   setIsCartVisible(!isCartVisible)
  // }

  return (
    <div className={HCSS.header}>
      <div className={HCSS.part1}>
        <div className={HCSS.navMenuIcon}>
          <Nav />
        </div>

        <div className={HCSS.logo}>
          <img src={logo} className={HCSS.logo} />
        </div>
      </div>

      <div className={HCSS.part2}>
        <ul className={HCSS.menuUL}>
          <li className={HCSS.menuList}> Collections</li>
          <li className={HCSS.menuList}>&nbsp; &nbsp; &nbsp; Men</li>
          <li className={HCSS.menuList}>&nbsp; Women</li>
          <li className={HCSS.menuList}>&nbsp; About</li>
          <li className={HCSS.menuList}>Contact</li>
        </ul>
      </div>

      <div className={HCSS.part3}>
        <div className={HCSS.cartIconCont}>
          <button className={HCSS.cartIcon} onClick={toggleCartVisible}>
            <img
              src={cart}
              className={HCSS.cartIcon}
              // onClick={addToCart}
              style={{ borderRadius: "15%" }}
            />

            <p className={HCSS.cartQuant}>{quantity}</p>
          </button>

          {/* {isCartVisible && ( */}
          {/* <CartDD 
cart={cart}
onClose={toggleCartVisible}
quantity={quantity}
setQuantity={setQuantity}
productInfo={[productInfo]}
addToCart={addToCart}
/>
)}  */}
        </div>

        <img className={HCSS.avatarIcon} src={avatar} />
      </div>
    </div>
  );
};

export default Header;
