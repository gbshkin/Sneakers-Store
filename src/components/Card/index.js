import React from 'react';
import styles from './Card.module.scss';

function Card({ price, title, imageUrl, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlus = () => {
    onPlus({ price, title, imageUrl });
    setIsAdded(!isAdded);
  };
  const onClickButton = () => {
    console.log(onPlus);
    console.log(onFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/favoriteUnactive.svg" alt="unliked logo" onClick={onFavorite} />
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
