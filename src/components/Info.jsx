
import React from 'react'
import AppContext from '../context';

 const Info = ({title, description, image}) => {
    const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="emptyBox">
    <img width={120} src={image}/>
    <h2>{title}</h2>
    <div>
    <p>{description}</p>
    </div>
    <button className="cartButton" onClick={()=>setCartOpened(false)}><img  width={16} height={16} src="/img/pointerLeft.svg" alt="Go back"/> Вернуться назад</button>
  </div>
  )
}

export default Info;
