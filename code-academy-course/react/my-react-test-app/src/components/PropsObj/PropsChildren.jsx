function List(props) {
    let titleText = `Favorite ${props.type}`;
    if (props.children instanceof Array) {
        titleText += "s";
    }
    return (
        <div>
            <h1>{titleText}</h1>
            <ul>{props.children}</ul>
        </div>
    )
}

export {
    List
};
