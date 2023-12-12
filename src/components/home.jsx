import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../redux/videoSlice/videoSlice';
import Video from './video';


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
<article key={clip.id}>
  <Video
  key={clip.id}
  title={clip.title} 
  description={clip.description}
  video_url={clip.video_url}
  />
</article>
    ))
   }
   
   </main>
  )
}



export default Home;