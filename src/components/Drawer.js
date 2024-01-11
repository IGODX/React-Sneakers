function Drawer(){
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
        <h2>Корзина</h2>
          <div className="cartItems">
          <div className="cartItem d-flex align-center mb-20">
            <img width={70} height={70} className="cartImage" src="/img/sneakers/sneakers1.jpg" alt="Cart item"/>
            <div className="cartTextHolder">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeFromCart" src="/img/btn-remove.svg" alt="Remove item"/>
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <img width={70} height={70} className="cartImage" src="/img/sneakers/sneakers1.jpg" alt="Cart item"/>
            <div className="cartTextHolder">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="removeFromCart" src="/img/btn-remove.svg" alt="Remove item"/>
          </div>
        </div>
        <div>
      <div className="cartTotalBlock">
        <ul >
          <li className="">
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li className="">
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button>Оформить заказ
          <span className="pointerBtnHolder">
          <img height={12} width={12} src="/img/pointerBtn.svg" alt=""/>
        </span>
        </button>
      </div>
      </div>    
    </div>  
    </div>
    )
}

export default Drawer;