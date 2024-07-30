import React from 'react';
import {Card} from '../components/Card';
import {AppContext} from '../context';

export function Favorites({onAddToFavorite}) {
    const {favorites} = React.useContext(AppContext);


    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Избранное</h1>
            </div>

            <div className="d-flex flex-wrap">
                {/* cards */}
                {favorites.map((item, id) => (
                    <Card
                        key={item.id}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

