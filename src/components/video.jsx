import React from 'react'

const video = ({ title, description, video_link}) => {
  return (
    <section className="video-container">
        <div>
            <p>{title}</p>
        </div>
        <div>
        <video controls>
          <source src={video_link} type="video/mp4" />
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