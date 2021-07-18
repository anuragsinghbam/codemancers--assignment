import './App.css'

import React, { useEffect, useState } from 'react'
import StartPost from './component/start-post/start-post.component'
import CreatePost from './component/create-post/create-post.component'
import Post from './component/post/post.component'

function App() {
  const [giphyData, setGiphyData] = useState([])
  const [postData, setPostData] = useState([])
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=3DONo6fapGZjNvv24fHuGq7RaB8AZrYE&limit=6&q=coding`

  function MakePost(title, id, imgUrl) {
    const post = {
      title: title,
      id: id,
      imgUrl: imgUrl,
    }

    setPostData([...postData, post])
  }

  const closeGifs = () => {
    const createPost = document.querySelector('.create-post')
    const gifs = document.querySelector('.gifs')
    const overlay = document.querySelector('.overlay')
    gifs.classList.remove('active')
    overlay.classList.remove('active')
    createPost.classList.remove('active')
  }

  useEffect(() => {
    fetch(giphyUrl)
      .then((res) => res.json())
      .then((data) => {
        setGiphyData(data.data)
      })
  }, [])

  return (
    <div className='App'>
      <StartPost />
      <CreatePost MakePost={MakePost} />

      {postData
        .slice(0)
        .reverse()
        .map((element) => {
          return (
            <Post
              title={element.title}
              key={element.id}
              imgUrl={element.imgUrl}
            />
          )
        })}

      {giphyData.map((element) => {
        return (
          <Post
            key={element.id}
            imgUrl={element.images.downsized.url}
            title={element.title}
          />
        )
      })}

      <div className='overlay' onClick={closeGifs}></div>
    </div>
  )
}

export default App
