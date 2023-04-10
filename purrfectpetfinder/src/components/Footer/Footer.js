import React from 'react';
import './Footer.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { IconButton } from '@mui/material'


function Footer() {
  return (
    <div className='footer-icons'>
        <button className='heart'>
            <FavoriteIcon fontSize='large' />
        </button>
        <button className='next'>
            <NextPlanIcon fontSize='large' />
        </button>

    </div>
  )
}

export default Footer