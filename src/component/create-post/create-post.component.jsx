import React, { useRef, useEffect, useState } from 'react'

import './create-post.styles.scss'
import Globe from '../../assets/globe.svg'
import ProfileImg from '../../assets/profile-img.jpg'
import GifIcon from '../../assets/gif-icon.svg'
import VideoIcon from '../../assets/video-solid-disabled.svg'
import ImageIcon from '../../assets/file-image-regular-disabled.svg'
import SmileIcon from '../../assets/laugh-regular-disabled.svg'
import Gifs from '../gifs/gifs.component'

const CreatePost = ({ MakePost }) => {
  const [imgUrl, setImgUrl] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef])

  const closeCreatePost = () => {
    const createPost = document.querySelector('.create-post')
    const overlay = document.querySelector('.overlay')

    overlay.classList.remove('active')
    createPost.classList.remove('active')
  }

  const handleClick = () => {
    const postElement = document.querySelector('.post-title-text')
    const selectedGif = document.querySelector('.selected-gif')

    if (postElement.innerText || selectedGif.children.length) {
      const postTitle = postElement.innerText
      postElement.innerText = ''
      MakePost(postTitle, Date.now(), imgUrl)

      selectedGif.innerHTML = ''
      setImgUrl('')
      closeCreatePost()
      return
    }

    console.log('not allowed')
    return
  }

  const openGif = (e) => {
    const gifs = document.querySelector('.gifs')
    gifs.classList.add('active')
  }

  return (
    <div className='create-post'>
      <div className='component-header'>
        <h2>Create Post</h2>
        <div className='cross-icon' onClick={closeCreatePost}>
          <span>&times;</span>
        </div>
      </div>
      <div className='user-profile'>
        <img src={ProfileImg} alt='user profile' />
        <div className='user-name'>
          <p className='name'>Anurag Singh</p>
          <p className='post-status'>
            <img src={Globe} alt='globe' />
            <span>Public</span>
          </p>
        </div>
      </div>

      <div className='write-post'>
        <span
          className='post-title-text'
          ref={inputRef}
          placeholder="What's on your mind, Anurag?"
          contentEditable='true'
        ></span>

        <div className='selected-gif'></div>
      </div>

      <div className='add-to-post'>
        <span>Add to your post</span>
        <div className='icons'>
          <img src={ImageIcon} alt='gif icon' />
          <img src={SmileIcon} alt='gif icon' />
          <img className='gif-icon' src={GifIcon} onClick={openGif} alt='gif icon' />
          <img src={VideoIcon} alt='gif icon' />
        </div>
      </div>
      <div className='btn-container'>
        <button className='post-btn' onClick={handleClick}>
          Post
        </button>
      </div>

      <Gifs setImgUrl={setImgUrl} />
    </div>
  )
}

export default CreatePost
