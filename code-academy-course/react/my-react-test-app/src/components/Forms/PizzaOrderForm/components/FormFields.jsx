import SelectField from "./SelectField";
import pizzaStyles from "../OrderPizza.module.scss";

function FormFields({ field, value, handleChange }) {
    return (
        <>
            <label className={pizzaStyles.label} htmlFor={field.label}>{field.label}</label>
            {field.type === "select" ? (<SelectField field={field} name={field.name} value={value} handleChange={handleChange} />)
                : (<input type={field.type} id={field.name} name={field.name} onChange={handleChange} value={value} className={pizzaStyles.input} />)
            }
        </>
    )
}

export default FormFields;
