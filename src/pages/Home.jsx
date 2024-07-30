import React from 'react';

import {Card} from '../components/Card';

export function Home({
                         items,
                         searchValue,
                         SetSearchValue,
                         onChangeSearchInput,
                         onAddToFavorite,
                         onAddtoCart,
                         isLoading,

                     }) {

    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (
            isLoading
                ? [...Array(8)]
                : filteredItems
        ).map((item, id) => (
            <Card
                key={id}
                onPlus={(obj) => onAddtoCart(obj)}
                onFavorite={(obj) => onAddToFavorite(obj)}
                {...item}
                loading={isLoading}
            />
        ));
    }


    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="search_icon"/>
                    {searchValue && (
                        <img
                            src="/img/btnDel.svg"
                            onClick={() => SetSearchValue('')}
                            className="clear removeBtn cu-p"
                            alt="clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap"> {/* main cards content*/}
                {renderItems()}
            </div>
        </div>
    );
}
