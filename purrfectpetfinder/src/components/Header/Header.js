import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import './Header.css';

function Header() {
  return (
    <div className='header-icons'>
        <IconButton className='profile'>
          <AccountCircleIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header