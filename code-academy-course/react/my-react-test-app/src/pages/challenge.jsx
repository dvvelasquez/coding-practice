import { comments } from '../components/Challenge/commentData';
import Card from '../components/Challenge/Card';

export default function ForumChallenge() {
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
