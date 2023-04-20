import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import './Header.css';
import BackgroundImage from '../../assets/main-wave.png'

function Header() {
  return (
    <div>
      <header style={ HeaderStyle }>
      <h1 className="dash-title text-center">Purrfect Pet Finder</h1>
      <div className='header-icons'>
          <button className='profile'>
            <AccountCircleIcon fontSize='medium'/>
          </button>
      </div>
      </header>
    </div>
  )
}
const HeaderStyle = {
  width: "100%",
  height: "50vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
export default Header