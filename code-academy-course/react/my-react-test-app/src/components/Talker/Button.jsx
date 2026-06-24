function Button1(props) {
    return (
      <button onClick={props.onClick}>
        Click me!
      </button>
    );
}

function Button2(props) {
    return (
      <button onClick={props.talk}>
        Click me!
      </button>
    );
}

function ButtonProps(props) {
    const {text = "This is Default TextUsing Props"} = props;
    return <button>{text}</button>
}

export {
  Button1,
  Button2,
  ButtonProps
}
