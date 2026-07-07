import { useState } from "react";
import Video from "./VideoEl";
import VideoMenu from "./VideoMenu";

function VideoPlayerMenu() {
    const videoPathsObj = {
        fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
        slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
        cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
        eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
    };

    const [src, setSrc] = useState(videoPathsObj.fast);

    const onSelectedVideo = (currentVide) => {
        setSrc(videoPathsObj[currentVide]);
    }

    return (
        <div className="video-player-wrapper">
            <h1>Video Player</h1>
            <VideoMenu onSelectVideo={onSelectedVideo} />
            <Video src={src} />
        </div>
    )
}

export default VideoPlayerMenu;
