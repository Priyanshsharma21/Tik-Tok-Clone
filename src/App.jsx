import React,{useState,useEffect} from 'react';
import Video from './Video';
import './App.css';
import db from './firebase'


const App = () => {
  const [videos, setVideo] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot=>(setVideo(snapshot.docs.map(doc=>doc.data()))))
  }, [])
  

  

  return (
    <>
      <div className='app'>
    <div className="app_video">
    {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
    </div>
  </div>
    </>
  )
}
export default App




// use effect use once if no dependency and if dependency on every change in video it will be fired 