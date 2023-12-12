import React from 'react'

const video = ({ title, description, video_url}) => {
  return (
    <section className="video-container">
        <div>
            <p>{title}</p>
        </div>
        <div className="flex-centre bg-slate-300 w-full h-auto">
        <video controls>
          <source src={video_url} type="video/mp4" />
          <source src={video_url} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </section>
  )
}

export default video