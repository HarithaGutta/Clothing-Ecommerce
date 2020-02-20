import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { ReactComponent as Logo } from "../../assets/crown.svg";
const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);
export default Header;
