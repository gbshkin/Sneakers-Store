import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, SetSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [favorites, setFavorites] = React.useState('');

  React.useEffect(() => {
    axios.get('https://66a1324f7053166bcabe527d.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://66a1324f7053166bcabe527d.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://66a2876e967c89168f206756.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddtoCart = (obj) => {
    axios.post('https://66a1324f7053166bcabe527d.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://66a1324f7053166bcabe527d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
   try {
    if (favorites.find((favObj) => favObj.id == obj.id)) {
      axios.delete(`https://66a2876e967c89168f206756.mockapi.io/favorites/${obj.id}`);
      
    } else {
      const { data } = await axios.post(`https://66a2876e967c89168f206756.mockapi.io/favorites/`, obj);
      setFavorites((prev) => [...prev, data]);
    }
   } 
   catch (error) {
    alert('Не удалось добавить в избранное')
   }
  };

  const onChangeSearchInpur = (event) => {
    SetSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header OnClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/favorites"
          element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
        />
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              SetSearchValue={SetSearchValue}
              onChangeSearchInpur={onChangeSearchInpur}
              onAddToFavorite={onAddToFavorite}
              onAddtoCart={onAddtoCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
