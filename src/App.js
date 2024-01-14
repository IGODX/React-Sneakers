import React from 'react';
import './App.css';
import Card from './components/Card'
import Drawer from './components/Drawer';
import axios from 'axios'
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import AppContext from './context';

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

React.useEffect(()=>{
  async function fetchData(){
    setIsLoading(true);
    try{
   const [cartResponse, favoritesResponse, itemsResponse] =  await Promise.all([axios.get("https://658ac14fba789a962237bb98.mockapi.io/api/asd/cart"), 
   axios.get("https://65a17d7e600f49256fb1bcfc.mockapi.io/favorites"), 
   axios.get("https://658ac14fba789a962237bb98.mockapi.io/api/asd/sneakers")])
   setItems(itemsResponse.data);
   setCartItems(cartResponse.data);
   setFavorites(favoritesResponse.data);
    }
    catch(error){
      console.error(error);
    }

  setIsLoading(false);

  }

  fetchData();
}, []) 
const onAddToCart = async (obj) => {
  try {
    const item = cartItems.find((item) => item && item.parentId && Number(item.parentId) === Number(obj.id));

    if (item) {
      setCartItems((prev) => prev.filter((item) => item && Number(item.parentId) !== Number(obj.id)));

      try {
        await axios.delete(`https://658ac14fba789a962237bb98.mockapi.io/api/asd/cart/${item.id}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://658ac14fba789a962237bb98.mockapi.io/api/asd/cart", obj);

        setCartItems((prev) =>
          prev.map((item) => {
            if (item && item.parentId && item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      } catch (error) {
        console.error(error);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

  const onChangeSearchInput = (event)=>{
    setSearchValue(event.target.value)
  }
  const onRemoveItem = async (id) =>{
    try{
    await axios.delete(`https://658ac14fba789a962237bb98.mockapi.io/api/asd/cart/${id}`)
    setCartItems((prev)=> prev.filter(e=> Number(e.id) !== Number(id)))
    }
    catch(error){
      console.error(error);
    }

  }

  const onAddToFavorite = async (obj)=>{
    try{
      const favorite = favorites.find(item=> item.parentId === obj.parentId);
    if(favorite){
    axios.delete(`https://65a17d7e600f49256fb1bcfc.mockapi.io/favorites/${favorite.id}`);
    setFavorites(prev=> prev.filter(index=> Number(index.id) !== Number(favorite.id)))
    }
    else{
      const {data} = await axios.post(`https://65a17d7e600f49256fb1bcfc.mockapi.io/favorites`, obj)
      obj.id = data.id;
      setFavorites((prev)=> [...prev, obj]);
    }
  }
  catch(err){
    console.error("Не удалось добавить в фавориты!");
  }
  }
  const isItemAdded = (id)=>{
    return cartItems.some(obj=> Number(id) === Number(obj.parentId))
  }
  const isItemFavorited = (id)=>{
    return favorites.some(obj=> Number(id) === Number(obj.parentId))
  }
  return (
    <AppContext.Provider value={{cartItems, favorites, items, isItemAdded, onAddToFavorite, setCartOpened, setCartItems, isItemFavorited}}>
    <div className="wrapper">
    {<Drawer items={cartItems} onClose={()=>setCartOpened(false)}  onRemove={onRemoveItem} opened={cartOpened}/>}
    <Header onClickCart={()=> setCartOpened(true)}/>
    <Routes>
    <Route
          path="/"
          element={
            <Home
            cartItems={cartItems}
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              isLoading={isLoading}
            />
          }
          exact
        />
    <Route path='/favorites' exact element={<Favorites onAddToFavorite={onAddToFavorite} onAddToCart={onAddToCart}></Favorites>}>
    </Route>
    <Route path='/orders' exact element={<Orders ></Orders>}>
    </Route>
    </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
