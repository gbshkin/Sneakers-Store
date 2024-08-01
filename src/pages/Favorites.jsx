import React from 'react';
import {Card} from '../components/Card';
import {AppContext} from '../context';
import {Link} from "react-router-dom";

export function Favorites({onAddToFavorite}) {
    const {favorites} = React.useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Избранное</h1>
            </div>

            {favorites.length > 0 ? (
                <div className="d-flex flex-wrap">
                    {favorites.map((item) => (
                        <Card
                            key={item.id}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                        />
                    ))}
                </div>
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '100vh'}}>
                    <div className="text-center">
                        <img width={70} height={70} src="/img/crySmile.png" alt="site logo"/>
                        <h3>Пусто =(</h3>
                        <p className="opacity-6">
                            Вы ничего не добавили в избранное</p>
                        <Link to="/">
                            <button className="backGreenButton">
                                <img className='mr-15' src="/img/backArrow.svg" alt="arrow"/>
                                Вернуться назад
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}