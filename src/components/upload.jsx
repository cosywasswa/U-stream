import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addVideo } from '../redux/videoSlice/videoSlice'
import { useUser} from './context'

const Upload = () => {
  const { user } = useUser();
 
    const userID = user?.data?.status?.data?.id;
 
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [videoFile, setVideoFile] = useState(null)

  const handleFileUpload = (event) =>{
    setVideoFile(event.target.files[0])
  }
 
  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
formData.append("video[title]", title);
formData.append("video[description]", description);
formData.append("video[category]", category);
formData.append("video[user_id]", userID);
formData.append("video[video_file]", videoFile);

// const form = {
//   "video": {
//     "title": title,
//     "description": description,
//     "category": category,
//     "user_id":userID
//   }
// }
     
for (const value of formData.values()) {
  console.log(value);
}
   
    if(title && description && category){
 dispatch(addVideo(formData));
console.log("successfull")
    }
    else{
      console.log("failed to submit")
    }
    setCategory('');
    setDescription('');
    setTitle('');
    setVideoFile(null)

  }

  return (
    <main className="w-screen">
    <header className="text-center text-32 p-10">Upload New Video</header>
    <section className="flex-col w-full">
      <form className="flex flex-col justify-center items-center w-screen" onSubmit={handleFormSubmit}>
<div className="flex flex-row justify-center items-center gap-20">
  <label htmlFor="title" className="text-20 ml-5">Title</label>
  <input type="text" className="border rounded-sm p-2 ml-1" name="title" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
</div >
<div className="flex flex-row justify-center items-center gap-5 pt-5">
  <label htmlFor="description" className="text-20 ml-5">Description</label>
  <input type="text" className="border rounded-sm p-2" name="description" placeholder="Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
</div>
<div className="flex flex-row justify-center items-center gap-5 pt-5">
  <label htmlFor="category" className="text-20 ml-5">Category</label>
  <input type="text" className="ml-4 border rounded-sm p-2" name="category" placeholder="Category" value={category} onChange={(e)=>setCategory(e.target.value)} />
</div>
<div className="flex justify-center items-center gap-10 w-screen pt-5">
  <label htmlFor="video" className="text-20 pl-10">Video</label>
  <input type="file" accept="*" id="video" className="ml-7" name="videoFile" onChange={handleFileUpload}/>
</div>
<div className="pt-5">
  <button type="submit" className="text-20 bg-green-500 px-2 flex rounded-sm text-white ml-10">Upload</button>
</div>
      </form>
    </section>
    </main>
  )
}

export default Upload;