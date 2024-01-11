function Card(){
return (
    <div className="card">
<div className="favorite">
  <img src="/img/heart-unlike.svg" alt="Unlike"/>
</div>
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
);
}

export default Card;