import pizzaStyles from "../OrderPizza.module.scss";

function SelectField({ field, value, handleChange }) {
    return (
        <select id={field.name} name={field.name} value={value} onChange={handleChange} className={pizzaStyles.input}>
            <option value="" disabled>Select your pizza</option>
            {field.options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    )
}

export default SelectField;
