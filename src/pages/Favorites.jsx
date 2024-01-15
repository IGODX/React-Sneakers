
import React from "react";
import Card from "../components/Card"
import AppContext from "../context";
 
function Favorites({onAddToFavorite, onAddToCart}) {
const {favorites,isItemFavorited, isItemAdded} = React.useContext(AppContext);
    return (
      <div className="content">
        <div className="mb-40 d-flex align-center justify-between">
          <h1 className="mainTitle">Мои закладки</h1>
        
        </div>
        <div className="d-flex flex-wrap justify-center">
        {favorites
            .map((item, index) => (
              <Card
                key={item.id}
                onPlus={onAddToCart}
                favorited={isItemFavorited(item && item.id)}
                added={isItemAdded(item && item.id)}
                 onFavorite={onAddToFavorite}
                 loading={false}
                 isFavorited
                 {...item}          />
            ))}
        </div>
      </div>
    );
  }
  
  export default Favorites;
  