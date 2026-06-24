import Body from './Body';
import Image from './Image';
import './styles.scss'

// First Version Code Academy
// export default function Card(props) {
//   console.log('here');
//   return (
//     <>
//       <Header
//         profileImg={props.commentObject.profileImg}
//         username={props.commentObject.username}
//       />
//       <Body comment={props.commentObject.comment} />
//     </>
//   )
// }

// Improved version with Desctructuring argument fpr comments
// export default function Card({ commentObject }) {
//   return (
//     <div style={{ margin: '40px 0' }}>
//       <Header
//         profileImg={commentObject.profileImg}
//         username={commentObject.username}
//       />
//       <Body comment={commentObject.comment} />
//     </div>
//   )
// }

// Improved version from the above
export default function Card({ profileImg, username, comment}) {
  return (
    <div className='card'>
        <Image
            profileImg={profileImg}
        />
        <Body 
            username={username}
            comment={comment}
        />
    </div>
  )
}
