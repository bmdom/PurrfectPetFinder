import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Description.css';
import Dashboard from '../Dashboard/Dashboard';

function  Description() {
  return (
    <div className='description'>
      <a href="/dashboard" className='description-icons' element={<Dashboard/>}>
        <ArrowBackIcon className='description-icons'/>
      </a>
      <h1>Description</h1>
      <p>Pet details here</p>
    </div>
  )
}
export default Description;
