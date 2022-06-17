import React,{useRef} from 'react'
import { useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'
import logo from './static/logo.png'


const Video = ({url,channel,description,song,likes,messages,shares}) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const onVideoPress=()=>{
        if(playing){
            videoRef.current.pause()
            setPlaying(false)
        }else{
            videoRef.current.play()
            setPlaying(true)
        }
    }
    
  return (
    <>
    <div className="video">
        <video className='video__player'  src={url} loop ref={videoRef} onClick={onVideoPress} />
        {/* video_logo */}
        <div className="logo">
            <img src={logo} alt="tik-tok logo" />
        </div>
        {/* This is a video footer */}
        <VideoFooter channel={channel} description={description} song={song}/>
        {/* This is a video side bar */}
        <VideoSideBar likes={likes} messages={messages} shares={shares}/>
    </div>
    </>
    )
}

export default Video



// Notes ->
// we use useRef because in tiktok we dont have play and paus button
// we press on button and it get pause and we press again it played same thing happens on youtube shorts
