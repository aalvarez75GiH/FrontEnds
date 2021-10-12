import React from 'react'
import VideoPlayer from 'react-video-js-player'
import video from '../videos/sh3ck-1080p-210928.mp4'

const VideoJS = () => {
    const videoSrc = video
    return(
    <VideoPlayer 
    className="videoPlayer"
    src={videoSrc} 
    // width="420" 
    // heigth="400"
    width="800" 
    heigth="700"
    />
    ) 
}

export default VideoJS


