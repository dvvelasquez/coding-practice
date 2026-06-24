function Greeting(props) {
  if (props.signedIn === false) {
    return <p>Please login.</p>;
  } else {
    return (
      <>
        <p>Welcome back, {props.name}!</p>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

export default Greeting;