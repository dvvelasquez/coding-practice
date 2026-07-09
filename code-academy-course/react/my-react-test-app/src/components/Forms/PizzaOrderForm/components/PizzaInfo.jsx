export default function PizzaInfo({ name, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>${price}</h3>
        </div>
    )
}
