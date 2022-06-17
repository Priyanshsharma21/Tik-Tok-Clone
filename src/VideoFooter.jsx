import React from 'react'
import './VideoFooter.css'
import disc from './static/disc.png'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
// import Tickers from './Ticker'




const VideoFooter = (props) => {
 
  
  return (
    <div className='videoFooter'>
    <div className="videoFooter_text">
    <h3 className='username'>@{props.channel}</h3>
    <p className='desc_name'>{props.description}</p>
    <div className="video_footer_ticker">
    <MusicNoteIcon className='video_footer_icon'/>
    <p className='ticker'>{props.song}</p>
    {/* <Tickers /> */}
    </div>
    </div>
    <img className='videoFooter_record' src={disc} alt="" />
    </div>
  )
}

export default VideoFooter

// Note 
// React ticker is for that music line goes from left to right