import React from 'react'
import './searchContainer.css'
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const searchContainer = () => {
  return (
    <div className='search-container'>
    <input type="text" placeholder='Search your GiF'/>
    <div className='search-icon'>
      <ImageSearchIcon />
    </div>
      
    </div>
  )
}

export default searchContainer
