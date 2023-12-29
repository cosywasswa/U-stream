import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchVideos, addComment, fetchComments } from '../redux/videoSlice/videoSlice';
import { useUser } from './context';
import Video from './video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Home= () => {
  const dispatch = useDispatch();
  const {videos, isLoading} = useSelector((store) => store.videoList)
  const comments = useSelector((store)=> store.videoList.comments)
  const {user} = useUser();
  const userId = user?.data?.status?.data?.id;
  const [description, setDescription] = useState('');
  const [activeComments, setActiveComments] = useState(false);


  const handleFormSubmit = async(e, videoId) =>{
    e.preventDefault();
    if(description && videoId){
      console.log(`video_id:${videoId}`)
      console.log(`user_id:${userId}`)
dispatch(addComment({
    'comment': {
       'description' : description,
      'user_id': userId,
       'video_id': videoId,
    },
    videoId: videoId
}))
setDescription('');
    } else{
      console.log('no videoId');
    }
   }
   const toggleActive = () =>{
setActiveComments(!activeComments)
   }

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
    dispatch(fetchVideos(videoId))
    return response.data;
    }catch(error){
      console.log(error)
    }
   }

   const getCommentsFetched = (videoId) =>{
  dispatch(fetchComments(videoId))

   }

  return (
    <main>
   {
    videos.map((clip) =>(
<article key={clip.id} videoId={clip.id} className="w-30 h-3/4">
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
    <FontAwesomeIcon icon={faCommentDots} className="relative bottom-80 left-80 text-white text-32" onClick={()=>getCommentsFetched(clip.id)} />
    <section className="comment-container w-screen h-screen bg-orange-300 ">
    {
      comments &&
            comments.status.data.map((comment)=>(
              <div className="w-screen h-screen bg-orange-300">
                <ul className="justify-center items-center">
                  <li key={comment.id}>
<p className="text-white">{comment.description}</p>
</li>
</ul>
</div>
            )
            )
            }
        <div>
            <form className="flex justify-center items-center" onSubmit={(e) => handleFormSubmit(e, clip.id)} >
                <label name="comment">Comment</label>
                <input type="text" className="" name="comment" value={description} onChange={(e)=>setDescription(e.target.value)} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>

  </div>
</article>
    ))
   }
   
   </main>
  )
}



export default Home;