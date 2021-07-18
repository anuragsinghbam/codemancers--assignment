import React from 'react'

import './start-post.styles.scss'
import ProfileImg from '../../assets/profile-img.jpg'
import VideoIcon from '../../assets/video-solid.svg'
import ImageIcon from '../../assets/file-image-regular.svg'
import SmileIcon from '../../assets/laugh-regular.svg'

const StartPost = () => {
  const createPost = document.querySelector('.create-post')
  const overlay = document.querySelector('.overlay')

  const openCreatePost = () => {
    createPost.classList.add('active')
    overlay.classList.add('active')
  }

  return (
    <div className='start-post'>
      <div className='top-section'>
        <img src={ProfileImg} alt='user profile' />
        <div className='write-something' onClick={openCreatePost}>
          <span>What's on your mind, Anurag?</span>
        </div>
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
}

export default StartPost
