import './App.css';

function App() {
  return (
    <div className="wrapper">
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
    <div className="content">
      <h1 className="mainTitle">Все кроссовки</h1>
      <div className="d-flex">
        <div className="card">
          <img width={133} height={133} src="/img/sneakers/sneakers1.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32}  src="/img/addSneakers.svg" alt="Add Sneakers"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={133} src="/img/sneakers/sneakers2.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32}  src="/img/addSneakers.svg" alt="Add Sneakers"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={133} src="/img/sneakers/sneakers3.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32}  src="/img/addSneakers.svg" alt="Add Sneakers"/>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={133} src="/img/sneakers/sneakers4.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={32} height={32}  src="/img/addSneakers.svg" alt="Add Sneakers"/>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
