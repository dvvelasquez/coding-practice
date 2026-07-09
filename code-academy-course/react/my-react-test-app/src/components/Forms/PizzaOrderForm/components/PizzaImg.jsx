import pizzaStyles from '../OrderPizza.module.scss';

export default function PizzaImage({ src, alt }) {
    return <img className={pizzaStyles.img} src={src} alt={alt} />
}
