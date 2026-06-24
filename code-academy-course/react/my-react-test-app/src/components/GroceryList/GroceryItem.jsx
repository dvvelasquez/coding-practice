function GroceryItemAdvanced(props) {
    let titleText = `Click to Reveal ${props.type ? props.type : ''}`;
    
    return (
        <div>
            <button onClick={props.show}>{titleText}</button>
            <ul>{props.children}</ul>
        </div>
    )
}

function GroceryItemSimple(props) {
    return (
        <button onClick={props.onClick}>
            {props.name}
        </button>
    )
}

export {
    GroceryItemAdvanced,
    GroceryItemSimple
}
