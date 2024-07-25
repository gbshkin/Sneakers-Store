import React from 'react';
import styles from './Card.module.scss';

function Card({ id, price, title, imageUrl, onPlus, onFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({ price, title, imageUrl });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    onFavorite({ id, price, title, imageUrl });
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={isFavorite ? './img/favoriteActive.svg' : './img/favoriteUnactive.svg'}
          alt="unliked logo"
          onClick={onClickFavorite}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? './img/green_add.svg' : './img/plus.svg'}
          alt="plus button"
        />
      </div>
    </div>
  );
}
export default Card;
