import React from 'react';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import {AppContext} from './context'
import {Header} from './components/Header';
import {Drawer} from './components/Drawer';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';
import {Orders} from "./pages/Orders";


export function App() {
    const [cartItems, setCartItems] = React.useState([]);
    const [items, setItems] = React.useState([]);
    const [searchValue, SetSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);
    const [favorites, setFavorites] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            try {
                const [
                    cartResponse,
                    favoritesResponse,
                    itemsResponse] = await Promise.all([
                    axios.get('https://dc187ccc09a54600.mokky.dev/cart'),
                    axios.get('https://dc187ccc09a54600.mokky.dev/favorites'),
                    axios.get('https://dc187ccc09a54600.mokky.dev/items'),
                ]);

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const onAddtoCart = async (obj) => {
        try {
            const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id))
            if (findItem) {
                await axios.delete(`https://dc187ccc09a54600.mokky.dev/cart/${findItem.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
            } else {
                const {data} = await axios.post('https://dc187ccc09a54600.mokky.dev/cart', obj);
                setCartItems((prev) => [...prev, data]);

            }
        } catch (err) {
            console.log(err)
        }


    };

    const onRemoveItem = (id) => {
        axios.delete(`https://dc187ccc09a54600.mokky.dev/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };


    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find((favObj) => favObj.id === obj.id)) {
                axios.delete(`https://dc187ccc09a54600.mokky.dev/favorites/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));

            } else {
                const {data} = await axios.post(`https://dc187ccc09a54600.mokky.dev/favorites`, obj);
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert('Не удалось добавить в избранное')
        }
    };
    const onChangeSearchInput = (event) => {
        SetSearchValue(event.target.value);
    };


    const isItemAdded = (id) => {

        return cartItems.some((obj) => Number(obj.parentId) === Number(id));

    }
    return (
        <AppContext.Provider value={{
            items,
            cartItems,
            favorites,
            isItemAdded,
            onAddToFavorite,
            setCartOpened,
            setCartItems,
            onAddtoCart,
            onRemoveItem,
        }}>
            <div className="wrapper clear">
                {cartOpened ? (
                    <Drawer onRemove={onRemoveItem}
                            items={cartItems}
                            onClose={() => setCartOpened(false)}/>
                ) : null}
                <Header OnClickCart={() => setCartOpened(true)}/>

                <Routes>
                    <Route
                        path="/favorites"
                        element={
                            <Favorites onAddToFavorite={onAddToFavorite}/>}/>
                    <Route
                        path="/"
                        element={
                            <Home
                                onPlus={onAddtoCart}
                                items={items}
                                cartItems={cartItems}
                                searchValue={searchValue}
                                SetSearchValue={SetSearchValue}
                                onChangeSearchInput={onChangeSearchInput}
                                onAddToFavorite={onAddToFavorite}
                                onAddtoCart={onAddtoCart}
                                isLoading={isLoading}
                            />
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <Orders />}/>

                </Routes>
            </div>
        </AppContext.Provider>
    );
}
