import React from "react";
import axios from "axios";
import Info from "../Info";
import AppContext from "../../context";
import { useCart } from "../../hooks/useCart";
import styles from './Drawer.module.scss'

function Drawer({onClose, items = [], onRemove, opened}){
  const [isOrderComplete, setIsOrderCompleted] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const { cartItems,setCartItems } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const {totalPrice } = useCart();
  const onClickOrder = async()=>{
    try{
      setIsLoading(true);
    const {data} = await axios.post("https://65a17d7e600f49256fb1bcfc.mockapi.io/orders", {items : cartItems});
    setOrderId(data.id)
    setIsOrderCompleted(true);
    setCartItems([])
    for (let i = 0; i < cartItems.length; i++) {
      const element = cartItems[i];
      await axios.delete("https://658ac14fba789a962237bb98.mockapi.io/api/asd/cart/" + element.id)
    }
    }
    catch(err)
    {
      console.log(err);
    }
    setIsLoading(false);
  }
    return (
        <><div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`} onClick={onClose}>
        </div>
        <div className={`${styles.drawer} ${opened ? styles.overlayVisible : ''}`}>
          <div className="d-flex justify-between">
          <h2>Корзина</h2>
          <img onClick={onClose} className="closeCart" src="img/btnRemove.svg" alt="Close cart" />
          </div>
          {items.length > 0 ? <div className="cartItemsWrapper">
            <div className="cartItems">
            {
             items.map((obj, index)=>
                (
                  <div key={obj.id} className="cartItem d-flex align-center mb-20">
                  <img width={70} height={70} className="cartImage" src={obj.imageUrl} alt="Cart item" />
                  <div className="cartTextHolder">
                    <p>{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removeFromCart" src="img/btnRemove.svg" alt="Remove item" onClick={()=>onRemove(obj.id)}/>
                </div>
                )
              )
            }
          </div>   <div className="cartTotalBlock">
              <ul>
                <li className="">
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice} руб. </b>
                </li>
                <li className="">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{ (totalPrice * 0.05).toFixed(1)} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={onClickOrder} className="cartButton">Оформить заказ
                <span className="pointerBtnHolder">
                  <img height={12} width={12} src="/img/pointerBtn.svg" alt="" />
                </span>
              </button>
          </div> 
          </div> :   
          <Info title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}  
          description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."} 
          image ={isOrderComplete ? "img/proceedPayment.png" : "img/box.png" }/>
  }
        </div></>  
    )
}

export default Drawer;