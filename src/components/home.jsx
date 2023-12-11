import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos, isLoading } from '../redux/videoSlice/videoSlice';
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
  description = {clip.description}
  video_link = {clip.video_file}
  />
</article>
    ))
   }
   
   </main>
  )
}



export default Home;