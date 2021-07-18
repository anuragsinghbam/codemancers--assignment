import React, { useState, useEffect } from 'react'

import './gifs.styles.scss'

import BackArrow from '../../assets/left-arrow.svg'
import SeachIcon from '../../assets/search-icon.svg'

const Gifs = ({ setImgUrl }) => {
  const [giphyData, setGiphyData] = useState([])
  const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=3DONo6fapGZjNvv24fHuGq7RaB8AZrYE&limit=30&q=`

  useEffect(() => {
    fetch(giphyUrl + 'hi')
      .then((res) => res.json())
      .then((data) => {
        setGiphyData(data.data)
      })
  }, [])

  const HandleChange = (e) => {
    fetch(giphyUrl + e.target.value)
      .then((res) => res.json())
      .then((data) => {
        setGiphyData(data.data)
      })
  }

  const closeGifs = () => {
    const gifs = document.querySelector('.gifs')
    gifs.classList.remove('active')
  }

  const handleClick = (e) => {
    const selectedGifContainer = document.querySelector('.selected-gif')
    const crossIconContainer = document.createElement('div')

    const crossIcon = document.createElement('span')
    const selectedGif = document.createElement('img')

    crossIcon.innerHTML = '&times;'

    setImgUrl(e.target.src)

    crossIconContainer.append(crossIcon)
    crossIconContainer.addEventListener('click', (e) => {
      selectedGif.remove()
      crossIconContainer.remove()
      setImgUrl('')
    })


    selectedGif.src = e.target.src
    selectedGifContainer.innerHTML = ''
    selectedGifContainer.append(crossIconContainer, selectedGif)
    closeGifs()
  }

  return (
    <div className='gifs'>
      <div className='header'>
        <div className='back-button' onClick={closeGifs}>
          <img src={BackArrow} alt='back arrow' />
        </div>
        <h2>Choose a GIF</h2>
      </div>

      <div className='search-bar'>
        <img src={SeachIcon} alt='search icon' />
        <input type='text' placeholder='Search' onChange={HandleChange} />
      </div>
      <div className='gifs-container'>
        {giphyData.map((element) => {
          return (
            <img
              key={element.id}
              src={element.images.downsized.url}
              alt={element.title}
              onClick={handleClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gifs
