import React from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import {AppContext} from '../../context';


export function Card({
  id,
  price,
  title,
  imageUrl,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
  

}) {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    console.log((`плюс`), obj);
    onPlus(obj);

  };
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  return (

    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={265}
          viewBox="0 0 165 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="135" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="180" rx="8" ry="8" width="80" height="24" />
          <rect x="0" y="116" rx="3" ry="3" width="150" height="15" />
          <rect x="120" y="185" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite}>
            <img
              src={isFavorite ? './img/favoriteActive.svg' : './img/favoriteUnactive.svg'}
              alt="unliked logo"
              onClick={onClickFavorite}
            />
          </div>
          <img width={133} height={112} src={imageUrl} alt={title} />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена</span>
              <b>{price} руб.</b>
              </div>
             
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={ isItemAdded(id) ? './img/green_add.svg' : './img/plus.svg'}
                alt="Plus"
              />
            
          </div>
        </>
      )}
    </div>
  );
}


