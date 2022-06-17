import React,{useState} from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSideBar.css'

const VideoSideBar = (props) => {
    const [liked, setLiked] = useState(false)
    const [likedCount, setLikeCount] = useState(props.likes)

    const handelLikeClick = ()=>{
        if(liked){
            setLiked(false)
            setLikeCount(likedCount-1)
        }else{
            setLiked(true)
            setLikeCount(likedCount+1)
        }
    }
    const buttonStyle = {
        fontSize:'40px'
    }
    const faviconStyle = {
        fontSize : "40px",
        color : "red",        
    }
    const favborderStyle = {
    fontSize : "40px"
    }

  return (
    <div>
    <div className="video_side_bar">
    <div className="sideBar_button">
    {liked?<FavoriteIcon style={faviconStyle} onClick={handelLikeClick}/>:<FavoriteBorderIcon  onClick={handelLikeClick} style={favborderStyle}/>}
        <p>{likedCount}</p>
    </div>

    <div className="sideBar_button">
        <MessageIcon style={buttonStyle}/>
        <p>{props.messages}</p>
    </div>

    <div className="sideBar_button">
        <ShareIcon style={buttonStyle}/>
        <p>{props.shares}</p>
    </div>



    </div>
    
    </div>
  )
}

export default VideoSideBar