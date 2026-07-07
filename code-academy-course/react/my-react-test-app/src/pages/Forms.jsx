import {
    FormsExplanation,
    FormInput,
    SchoolForms,
    ControlledForm,
    UnControlledForm,
    UncontrolledFileManager
} from "../components/Forms/Forms";

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
        </>
    )
}

export default ReactForms;
