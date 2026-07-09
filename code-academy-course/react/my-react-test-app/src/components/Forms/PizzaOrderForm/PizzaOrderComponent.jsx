import { useState, useEffect } from "react";
import pizzaStyles from "./OrderPizza.module.scss";
import PizzaForm from "./components/PizzaOrderForm";
import PizzaImage from "./components/PizzaImg";
import PizzaInfo from "./components/PizzaInfo";

function OrderPizza() {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const endPoint = '/PizzaData.json'
        async function fetchPizzas() {
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const response = await fetch(endPoint);

                if (!response.ok) {
                    throw new Error(`
                        Faield to load piza data ${response.status} ${response.statusText}
                    `)
                }

                const contentType = response.headers.get('content-type');

                if (!contentType?.includes('application/json')) {
                    throw new Error('Response is not JSON');
                }
                const data = await response.json();
                setPizzas(data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchPizzas();
    }, []);

    if (loading) {
        return (
            <h2 className={pizzaStyles.loading}></h2>
        );
    }

    if (error) {
        return <h2 className={pizzaStyles.error}>{error}</h2>;
    }

    if (!loading && pizzas.length === 0) {
        return <h2>No pizzas vailable at the moment, please try later...</h2>
    }

    return (
        <div className={`${pizzaStyles.orderPizzaWrapper} ${pizzaStyles.containerWrapper}`}>
            <div className={pizzaStyles.containerItem}>
                {pizzas?.map(pizza => (
                    <div className={pizzaStyles.cardContainer} key={pizza.name}>
                        <div>
                            <PizzaImage src={pizza.src} alt={pizza.name} />
                        </div>
                        <div className={pizzaStyles.body}>
                            <PizzaInfo name={pizza.name} price={pizza.price} />
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <PizzaForm />
            </div>
        </div>
    )
}

export default OrderPizza;
