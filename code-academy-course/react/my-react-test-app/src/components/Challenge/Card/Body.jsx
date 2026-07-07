export default function Body(props) {
    return (
        <div className="card-body-wrapper">
            <h2 className="card-title">{props.username}</h2>
            <p className="car-comment">{props.comment}</p>
        </div>
    )
}
