import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { fetchVideos } from '../redux/videoSlice/videoSlice';
import { useUser } from './context';

const Account = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((store) => store.videoList);
  const { user } = useUser();
  const userID = user?.data?.status?.data?.id;
  useEffect(() =>{
dispatch(fetchVideos());
  }, [dispatch])
  const myVideos = videos.filter((video) => video.user_id == userID)
  if(myVideos.length === 0){
    return(<h1 className="text-center pt-5 text-20">You have no videos uploaded</h1>)
  }
  return (
    <main className="">
    <section>
      <div className="flex text-center text-25 font-bold pt-2 justify-center items-center space-x-2" >
      < FontAwesomeIcon icon={faUser} />
      <h2>My Account details</h2>
      </div>
<div className="flex justify-center items-center space-x-10 text-20 p-5">
<h2>name: {user?.data?.status?.data?.name}</h2>
<h2>Email: {user?.data?.status?.data?.email}</h2>
</div>
    </section>
    <section className="grid grid-cols-2 bg-indigo-300">
      { myVideos.map((clip) =>(
<div className="w-40">
  <h1 className="text-white text-20 font-bold">{clip.title}</h1>
  <video controls>
    <source src={clip.video_url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
))}
    </section>
    </main>
  )
}

export default Account