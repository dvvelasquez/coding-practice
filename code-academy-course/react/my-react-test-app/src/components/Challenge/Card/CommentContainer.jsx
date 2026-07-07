import { comments } from './commentData';
import Card from './Card';

function ForumChallenge() {
    return (
        <>
            <h1>Forum Challenge</h1>
            {comments.map((comment, index) => (
                <Card
                    key={index + comment.username}
                    profileImg={comment.profileImg}
                    username={comment.username}
                    comment={comment.comment}
                />
            ))}
        </>
    )
}

export default ForumChallenge;

