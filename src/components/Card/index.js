import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import React from 'react'
import AppContext from "../../context";

function Card({onFavorite,
   id, 
   imageUrl,
    title, 
    price,
     onPlus, 
     parentId,
     isFavorited = false,
     loading =true}){
  const {isItemAdded, isItemFavorited} = React.useContext(AppContext);
  const object = {imageUrl, parentId: parentId ? parentId: id, title, price, id};
  const onClickPlus = ()=>{
    onPlus(object)
  }
  const onClickFavorite = ()=>{
    onFavorite(object);
  }
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 150 198"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="5" ry="5" width="150" height="91" />
          <rect x="0" y="104" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="133" rx="5" ry="5" width="93" height="15" />
          <rect x="0" y="166" rx="5" ry="5" width="80" height="24" />
          <rect x="112" y="158" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && <div className={styles.favorite}>
            <img onClick={onClickFavorite} src={isItemFavorited(parentId ? parentId : id) ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt="Unlike" />
          </div>}
          <img width='100%' height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price}</b>
            </div>
            {onPlus && <img
              className={styles.plus}
              width={32}
              height={32}
              onClick={onClickPlus}
              src={isItemAdded( parentId? parentId: id) ? "/img/btnChecked.svg" : "/img/btnAdd.svg"}
              alt="Add Sneakers"
            />
        }
          </div>
        </>
      )}
    </div>
  );
      }
export default Card;