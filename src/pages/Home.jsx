import Card from "../components/Card";
import React from "react";
import AppContext from "../context";

function Home({ items,
   searchValue, 
   onChangeSearchInput, 
   onAddToFavorite, 
   onAddToCart, 
   isLoading }) {
  const { isItemAdded, isItemFavorited } = React.useContext(AppContext);

  const renderItems = () => {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (isLoading ? [...Array(8)] : filteredItems)
      .map((item, index) => (
        <Card
          key={index}
          onFavorite={(obj) => onAddToFavorite(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          added={isItemAdded(item && item.id)}
          favorited={isItemFavorited(item && item.id)}
          loading={isLoading}
          {...item}
        />
      ));
  };

  return (
    <div className="content">
      <div className="mb-40 d-flex align-center justify-between">
        <h1 className="mainTitle">{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
        <div className="d-flex search-block">
          <img src="img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div className="d-flex flex-wrap justify-center">
        {renderItems()}
      </div>
    </div>
  );
}

export default Home;
