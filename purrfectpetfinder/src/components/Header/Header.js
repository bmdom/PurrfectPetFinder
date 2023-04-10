import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <div>
      <div>
        <h1>Purrfect Pet Finder Logo here</h1>
      </div>
      <div className='header-icons'>
          <button className='profile'>
            <AccountCircleIcon fontSize='large'/>
          </button>
      </div>
    </div>
  )
}

export default Header