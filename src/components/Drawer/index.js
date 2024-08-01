import React from "react";
import axios from "axios";

import {Info} from "../info";
import {useCart} from "../../hooks/useCart";

import AppContext from "../../context";

import styles from "./Drawer.module.scss";


export function Drawer({onRemove, onClose, items = [], opened}) {
    const {setCartItems, cartItems} = React.useContext(AppContext);
    const {tax, totalPrice} = useCart()
    const [isOrder, setOrder] = React.useState(false);
    const [orderId, setOrderId] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);


    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post('https://dc187ccc09a54600.mokky.dev/orders', {items: cartItems});
            await axios.patch('https://dc187ccc09a54600.mokky.dev/cart', []);
            setOrderId(data.id);
            setOrder(true);
            setCartItems([]);
        } catch (error) {
            console.error('Ошибка при создании заказа или обновлении корзины:', error);
            alert('Не удалось создать заказ :(');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`} onClick={onClose} >
            <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src="/img/btnDel.svg"
                        alt="remove icon"></img>
                </h2>

                {items.length > 0 ? (<div className="d-flex flex-column flex">
                    <div className={styles.items}>
                        {items.map((obj) => (<div key={obj.title} className="cartItem d-flex align-center mb-20">
                            <div
                                style={{backgroundImage: `URL(${obj.imageUrl})`}}
                                className="cartItemImg"></div>

                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>

                            <img
                                onClick={() => onRemove(obj.id)}
                                className="removeBtn"
                                src="/img/btnDel.svg"
                                alt="remove icon"
                            />
                        </div>))}
                    </div>

                    <div className="cartTotalBlock">
                        <ul>
                            <li>
                                <span>Итого:</span>
                                <div></div>
                                <b>{totalPrice} руб. </b>
                            </li>
                            <li>
                                <span>Налог 5%:</span>
                                <div></div>
                                <b>{tax} руб. </b>
                            </li>
                        </ul>
                        <button disabled={isLoading} onClick={onClickOrder}
                                className="greenButton">{isLoading ? 'Протираем кроссовки' : 'Оформить заказ'}<img
                            src="/img/arrow.svg" alt="arrow"/>
                        </button>
                    </div>
                </div>) : (<Info title={isOrder ? "Заказ оформлен!" : "Корзина пустая"}
                                 description={isOrder ? `Ваш заказ #${orderId}! Курьер уже обувает ваши кроссовки` : `На кроссах дырка - зашей, заказ пустой как ваш кошель =(`}
                                 image={isOrder ? "/img/completeOrder.svg" : "/img/cartEmpty.png"}/>)}
            </div>
        </div>);
}
