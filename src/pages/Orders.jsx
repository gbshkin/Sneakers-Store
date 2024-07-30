import React from "react";
import {Card} from "../components/Card";
import {AppContext} from '../context';
import axios from "axios";

export function Orders() {
    const [orders, setOrders] = React.useState([]);
    const {onAddtoCart, onAddToFavorite} = React.useContext(AppContext);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://dc187ccc09a54600.mokky.dev/orders');
                console.log(data);
                setOrders(data)
                setIsLoading(false)
            } catch (error) {
                alert("Ошибка при загрузке заказов")
            }
        })();
    },[])
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Мои заказы</h1>
            </div>

            <div className="d-flex flex-wrap">
                <div className="d-flex flex-wrap">
                    {orders.map((item, id) => (
                        <Card
                            key={id}
                            onPlus={(obj) => onAddtoCart(obj)}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            {...item}
                            loading={isLoading}

                            {...orders}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}
