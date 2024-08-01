import React from "react";
import {Card} from "../components/Card";
import {AppContext} from '../context';
import axios from "axios";
import {Link} from "react-router-dom";

export function Orders() {
    const [orders, setOrders] = React.useState([]);

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://dc187ccc09a54600.mokky.dev/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false)
            } catch (error) {
                alert("Ошибка при загрузке заказов")
            }
        })();
    }, [])
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои заказы</h1>
            </div>
            {orders.length > 0 ? (
                <div className="d-flex flex-wrap">
                    {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <Card key={index} loading={isLoading} {...item} />
                    ))}
                </div>
            ) : (
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ height: '100vh' }}
                >
                    <div className="text-center">
                        <img width={70} height={70} src="/img/sadSmile.png" alt="site logo" />
                        <h3>У вас нет заказов</h3>
                        <p className="opacity-6">Заработайте денег и сделайте первый заказ</p>
                        <Link to="/">
                            <button className="backGreenButton">
                                <img className='mr-15' src="/img/backArrow.svg" alt="arrow"/>Вернуться назад
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}