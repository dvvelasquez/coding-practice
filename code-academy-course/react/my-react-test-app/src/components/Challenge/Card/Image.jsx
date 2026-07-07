export default function Image(props) {
  return (
    <div className="card-image-container">
      <img src={props.profileImg} className="card-image" alt={props.username} />
    </div>
  )
}

