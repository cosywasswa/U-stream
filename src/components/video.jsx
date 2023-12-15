import React from 'react';

const Video = ({ title, description, video_url}) => {
  return (
    <section className="video-container h-2/3">
        <div className="relative top-40 text-center text-white text-20">
            <p>{title}</p>
        </div>
        <div className="flex-centre bg-slate-300 w-full h-auto">
        <video controls className="w-screen h-auto">
          <source src={video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="relative bottom-60 z-10 text-center text-white text-20 w-80">
            <p>{description}</p>
        </div>
    </section>
  )
}

export default Video