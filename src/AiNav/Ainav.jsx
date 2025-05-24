import React, { useState } from 'react'
import './Ainav.css'
import ai from '../assets/AI.svg'
import format from '../assets/format.svg'

const Ainav = () => {
  return (
    <div>
        <div className='nav-2'>
            <div className='grid'>
                <img src={ai} alt="" />
                <p>Details</p>
            </div>
            <img src={format} alt="" />
        </div>
    </div>
  )
}

export default Ainav