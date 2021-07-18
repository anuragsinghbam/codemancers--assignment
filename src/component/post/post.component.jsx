import React from 'react'

import './post.styles.scss'
import Globe from '../../assets/globe.svg'
import ProfileImg from '../../assets/profile-img.jpg'
import Codemancers from '../../assets/codemancers.png'

import HorizontalEllipsis from '../../assets/horizontal-ellipsis.svg'
import LikeIcon from '../../assets/like-icon.svg'
import CommentIcon from '../../assets/comment-icon.svg'
import ShareIcon from '../../assets/share-icon.svg'

const Post = ({ imgUrl, title }) => (
  <div className='post'>
    <span className='more-options'>
      <img src={HorizontalEllipsis} alt='more options' />
    </span>
    <div className='user-profile'>
      <img src={ProfileImg} alt='user profile' />
      <div className='user-name'>
        <p className='name'>Anurag Singh</p>
        <p className='post-status'>
          <span>
            1h <b>·</b>
          </span>
          <img src={Globe} alt='globe' />
        </p>
      </div>
    </div>
    <p className='post-text'>
      {title}
    </p>
    <div className='post-image'>
      <img src={imgUrl.trim() ? imgUrl : Codemancers} alt='post' />
    </div>
    <div className='bottom-section'>
      <div className='live-video'>
        <img src={LikeIcon} alt='video icon' draggable='false' />
        <span>Like</span>
      </div>
      <div className='photo-video'>
        <img src={CommentIcon} alt='icon' draggable='false' />
        <span>Comment</span>
      </div>
      <div className='feeling-activity'>
        <img src={ShareIcon} alt='smile icon' draggable='false' />
        <span>Share</span>
      </div>
    </div>
  </div>
)

export default Post
