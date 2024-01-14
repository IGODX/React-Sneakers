import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context";
import { useCart } from "../../hooks/useCart";

function Header(props){
  const { cartItems} = React.useContext(AppContext);
  const {totalPrice } = useCart();
    return (
        <header>
        <Link to={"/"}>
        <div className="headerLeft">
        <img width={40} height={40}  src="/img/logo.png" alt="logo"/>
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        </Link>
        <ul className="headerRight">
          <li className="cartHolder" onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="Cart Icon"/>
            <span className="navbarDark">{totalPrice } руб.</span>
          </li>
          <li className="favHolder">
            <Link to={"/favorites"}>
          <img width={18} height={18} src="/img/fav.svg" alt="Favorite Icon"/>
          <span className="navbarLight">Закладки</span>
          </Link>
          </li>
          <li className="profileHolder">
          <Link to={"/orders"}>
          <img width={18} height={18} src="/img/profile.svg" alt="Profile Icon"/>
          <span className="navbarLight">Профиль</span>
          </Link>
          </li>
        </ul>
      </header>
    )
}

export default Header;