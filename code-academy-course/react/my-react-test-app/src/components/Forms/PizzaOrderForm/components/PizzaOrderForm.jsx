import { useState, } from "react";
import pizzaStyles from "../OrderPizza.module.scss";
import FormFields from "./FormFields";

function PizzaForm() {
    const initiaState = {
        buyerName: '',
        mobile: '',
        homeAddress: '',
        orderMenu: ''
    }

    const [orderPizzaDetails, setOrderPizzaDetails] = useState(initiaState);
    const [orderRes, setOrderRes] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

        const formFields = [
        {
            id: "buyerName",
            name: "buyerName",
            label: "buyerName",
            type: "text"
        },
        {
            id: "mobile",
            name: "mobile",
            label: "mobile",
            type: "tel"
        },
        {
            id: "homeAddress",
            name: "homeAddress",
            label: "homeAddress",
            type: "text"
        },
        {
            id: "orderMenu",
            name: "orderMenu",
            label: "orderMenu",
            type: "select",
            options: ["Shakshuka", "Spaghetti Carbonara", "Margherita Pizza"]
        },
    ]

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setOrderPizzaDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentNumber = orderPizzaDetails.mobile;

        if (!currentNumber.trim()) {
            setErrorMsg("Phone number is required");
            return;
        }

        if (Number.isNaN(Number(currentNumber))) {
            setErrorMsg("Phone number must contain only numbers");
            return;
        }

        if (currentNumber.length > 10) {
            setErrorMsg("Phone number must be exactly 10 digits");
            return;
        }

        const isEmptyField = Object.values(orderPizzaDetails).some(
            value => value.trim() === ''
        );

        console.log('is empty', isEmptyField);
        if (isEmptyField) {
            console.log('it is empty');
            setErrorMsg("Error: please fill up the form");
            return;
        }

        setErrorMsg("");

        const successMessage = `
            Great news your order is ${orderPizzaDetails.buyerName}, ${orderPizzaDetails.mobile}, ${orderPizzaDetails.homeAddress}, ${orderPizzaDetails.orderMenu}
        `;

        setOrderRes(successMessage);
    }

    return (
        <>
            <form className={pizzaStyles.form} onSubmit={handleSubmit}>
                {formFields.map(field => (
                    <FormFields
                        key={field.id}
                        field={field}
                        value={orderPizzaDetails[field.name]}
                        handleChange={handleChange}
                    />
                ))}

                <input type="submit" value="Submit Order" />
            </form>
            {orderRes && <p>{orderRes}</p>}
            {errorMsg && <p>{errorMsg}</p>}
        </>
    )
}

export default PizzaForm;
