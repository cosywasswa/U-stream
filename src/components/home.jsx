import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/videoSlice/videoSlice';
import Video from './video';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';

const Home= () => {
  const dispatch = useDispatch();
  const {videos, isLoading} = useSelector((store) => store.videoList)

  useEffect(() =>{
    dispatch(fetchVideos())
  }, [dispatch])

   if(isLoading){
    return(<div>Video loading</div>)
   }

  return (
    <main>
   {
    videos.map((clip) =>(
<article key={clip.id} className="w-30 h-3/4">
  <Video
  key={clip.id}
  title={clip.title} 
  description={clip.description}
  video_url={clip.video_url}
  />
  <div>
    <FontAwesomeIcon icon={faCommentDots} className="relative bottom-80 left-80 text-white text-32"/>
    <Comment 
    key={clip.id}
      videoId={clip.id}
    />

  </div>
</article>
    ))
   }
   
   </main>
  )
}



export default Home;