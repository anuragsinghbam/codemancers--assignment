import React from 'react'

import './create-post.styles.scss'
import ProfileImg from '../../assets/profile-img.jpg'
import VideoIcon from '../../assets/video-solid.svg'
import ImageIcon from '../../assets/file-image-regular.svg'
import SmileIcon from '../../assets/laugh-regular.svg'


const CreatePost = () => (
  <div className='create-post'>
    <div className='top-section'>
      <img src={ProfileImg} alt='user profile' />
      <div>{`What's on your mind?`}</div>
    </div>
    <div className='bottom-section'>
      <div className='live-video'>
        <img src={VideoIcon} alt='video icon' /> 
        <span>Live Video</span>
      </div>
      <div className='photo-video'>
      <img src={ImageIcon} alt='icon' /> 
        <span>Photo/Video</span>
      </div>
      <div className='feeling-activity'>
        <img src={SmileIcon} alt='smile icon' /> 
        <span>Feeling/Activity</span>
      </div>
    </div>
  </div>
)

export default CreatePost
