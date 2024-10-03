import React, { useState } from "react";
import NCSS from "./Nav.module.css";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-close.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={NCSS.navComp}>
      <button className={NCSS.navMenuIcon} onClick={toggleMenu}>
        <img
          src={isOpen ? close : menu}
          className={NCSS.navMenuIcon}
          alt="Menu Toggle"
        />
      </button>

      {isOpen && (
        <div className={`${NCSS.navDropdown} ${isOpen ? NCSS.open : ""}`}>
          <ul className={NCSS.menuUL}>
            <li className={NCSS.menuList}>Collections</li>
            <li className={NCSS.menuList}>Men</li>
            <li className={NCSS.menuList}>Women</li>
            <li className={NCSS.menuList}>About</li>
            <li className={NCSS.menuList}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
