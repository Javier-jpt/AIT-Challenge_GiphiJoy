import React from 'react'
import './psychedelicGiphy.css'

function PsychedelicGiphy({ giphy }) {
  return (
    <div className='artist-giphy'>
      <img src={giphy.images.downsized.url} alt={giphy.title} />
    </div>
  )
}

export default PsychedelicGiphy;
