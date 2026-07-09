import {
    FormsExplanation,
    FormInput,
    SchoolForms,
    ControlledForm,
    UnControlledForm,
    UncontrolledFileManager
} from "../components/Forms/Forms";
import OrderPizza from "../components/Forms/PizzaOrderForm/PizzaOrderComponent";

function ReactForms({ pageTitle }) {
    return (
        <>
            <h1>{pageTitle}</h1>

            <FormsExplanation />

            <FormInput />

            <SchoolForms />

            <ControlledForm />

            <UnControlledForm />

            <UncontrolledFileManager />

            <OrderPizza />
        </>
    )
}

export default ReactForms;
