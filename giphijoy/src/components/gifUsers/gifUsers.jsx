import React from 'react'
import './gifUsers.css'

function GifUsers({ gif }) {
  return (
    <div className='users-giphy'>
    <img src={gif.imageUrl} alt={gif.name} />
    </div>
  )
}

export default GifUsers