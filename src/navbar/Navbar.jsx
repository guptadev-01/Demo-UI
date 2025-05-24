import React from 'react'
import './navbar.css'
import dot from '../assets/dot.svg'
import close from '../assets/close-2.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <navbar>
            <h2>Luis Eston</h2>
            <div className='logo'>
                <div><img className='dot' src={dot} alt="" /></div>
                <div><img className='close' src={close} alt="" /></div>
            </div>
        </navbar>
    </div>
  )
}

export default Navbar