import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useUser } from './context';
import { addComment, fetchComments } from '../redux/videoSlice/videoSlice';


const Comment = ({videoId}) => {
    const dispatch = useDispatch();
    const { user } = useUser();
    const userId = user?.data?.status?.data?.id;
    const [description, setDescription] = useState('');
    const [activeComments, setActiveComments] = useState(false);

   const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(description){
dispatch(addComment({
    "comment": {
       "description" : description,
       "user_id": userId,
       "video_id": videoId
    }
}))
    }
    setDescription('')
   }
   const toggleActive = () =>{
setActiveComments(!activeComments)
   }
  return (
    <section className="comment-container ">
        <div>
        <p>{}</p>
        </div>
        <div>
            <form className="flex justify-center items-center" onSubmit={handleFormSubmit}>
                <lable name="comment">Comment</lable>
                <input type="text" className="" name="comment" value={description} onChange={(e)=>setDescription(e.target.value)} />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Comment