import React from 'react';
import intro from "../assets/intro_video.mp4"

function Opening() {
  return (
    <div className='h-screen bg-black flex items-center justify-center'>
        <video className='w-[50%] object-cover mix-blend-screen' src={intro} preload='auto' autoPlay loop muted></video>
    </div>
  )
}

export default Opening