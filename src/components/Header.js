function Header(){
    return (
        <header>
        <div className="headerLeft">
        <img width={40} height={40}  src="/img/logo.png" alt="logo"/>
        <div className="headerInfo">
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
        </div>
        <ul className="headerRight">
          <li className="cartHolder">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart Icon"/>
            <span class="navbarDark">1205 руб.</span>
          </li>
          <li className="favHolder">
          <img width={18} height={18} src="/img/fav.svg" alt="Favorite Icon"/>
          <span className="navbarLight">Закладки</span>
          </li>
          <li className="profileHolder">
          <img width={18} height={18} src="/img/profile.svg" alt="Profile Icon"/>
          <span className="navbarLight">Профиль</span>
          </li>
        </ul>
      </header>
    )
}

export default Header;