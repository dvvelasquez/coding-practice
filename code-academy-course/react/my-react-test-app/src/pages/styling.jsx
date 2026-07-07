import CardStyling from "../components/Styling/CardStyle";
import {
    InlineAndObjectStyles
} from "../components/Styling/GeneralStyling";

function StylingComponents() {
    const classNames = {
        camelCase: ["className", "containerBg", "buttonGreen"],
        snakeCase: ["class_name", "container_bg", "button_green"],
        kebabCase: "Kebab case is not allowd in React css",
        modifiers: ["card__title--large", "card__title--small", "card__title--medium"]
    }

    return (
        <>
            <h1>Styling Components CSS or SCSS</h1>
            <p>Class Names in React css should be the following </p>
            <ul>
                {Object.entries(classNames).map(([details, keys]) => (
                    <li key={keys}>
                        <strong>{details}</strong>: {Array.isArray(keys)? keys.join(", ") : keys}
                    </li>
                ))}
            </ul>

            <CardStyling />

            <InlineAndObjectStyles />
        </>
    )
}

export default StylingComponents;
