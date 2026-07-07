import cardStyles from "./CardStyles.module.scss"

function CardStyling() {
  return (
    <>
      <div className={cardStyles.menuWrapper}>
        <div className={cardStyles.menuTop}>
          <div>
            <h1>Bread First Search</h1>
          </div>
        </div>
        <div className={cardStyles["menu-bottom"]}>
            <p>body container above with class using hyphen</p><br/>
            <p>
                Think you've got a great eye? Challenge yourself to hunt down slices of bread hidden in a maze!
            </p>
            <button className={cardStyles.card_btn}>Play</button>
            <p>Button above with class using underscore</p>
        </div>
      </div>
    </>
  )
}

export default CardStyling;
