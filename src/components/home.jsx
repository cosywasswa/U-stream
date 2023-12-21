import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchVideos } from '../redux/videoSlice/videoSlice';
import { useUser } from './context';
import Video from './video';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Home= () => {
  const dispatch = useDispatch();
  const {videos, isLoading} = useSelector((store) => store.videoList)
  const {user} = useUser();
  const userId = user?.data?.status?.data?.id;

  useEffect(() =>{
    dispatch(fetchVideos())
  }, [dispatch])

   if(isLoading){
    return(<div>Video loading</div>)
   }

   const handleLikes = async(videoId) =>{
    try{
    const response = await axios.post(`http://127.0.0.1:4000/api/v1/videos/${videoId}/likes`, {
      "like":{
        "video_id": videoId,
        "user_id": userId
      }
    })
    console.log('liked')
    return response.data;
    }catch(error){
      console.log(error)
    }
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
    <FontAwesomeIcon icon={faThumbsUp} className="relative bottom-80 left-80 text-white text-32" onClick={()=>handleLikes(clip.id)}/>
    <span className="relative bottom-80 left-60 text-white text-25">{clip.likes_counter}</span>
  </div>
  <div>
    <FontAwesomeIcon icon={faCommentDots} className="relative bottom-80 left-80 text-white text-32" />
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