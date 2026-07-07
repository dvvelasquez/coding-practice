import ForumChallenge from '../components/Challenge/Card/CommentContainer';
import GuineaPigImgContainer from '../components/Challenge/SlideImages/containers/GuineaImgContainer'
import VideoPlayerMenu from '../components/Challenge/VideoPlayer/VideoPlayer';
import RockPaperScissors from '../components/Challenge/RockPaperScissors/Game';

export default function Challenges() {
    return (
        <>
            <ForumChallenge />

            <GuineaPigImgContainer />

            <VideoPlayerMenu />

            <RockPaperScissors />
        </>
    )
}
