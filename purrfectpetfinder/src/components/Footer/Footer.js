import React from 'react';
import './Footer.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { IconButton } from '@mui/material'


function Footer() {
  return (
    <div className='footer-icons'>
        <IconButton className='back'>
            <ReplayCircleFilledIcon fontSize='large'/>
        </IconButton>
        <IconButton className='heart'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='next'>
            <NextPlanIcon fontSize='large' />
        </IconButton>

    </div>
  )
}

export default Footer