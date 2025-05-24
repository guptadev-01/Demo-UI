import React from 'react'
import './Converse.css'
import coffee from '../assets/Coffee.jpg'
import food from '../assets/Food.jpg'

const Converse = () => {
  return (
    <div className='converse'>
        <div className='p-1'>
            <img className='name' src={coffee} alt="" />
            <p className='chat'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dicta, corporis accusantium assumenda sapiente doloremque aut impedit similique voluptate est itaque sed in nam voluptatibus! Beatae blanditiis ipsum quo distinctio.</p>
        </div>
        <div className='p-2'>
            <img className='name-2' src={food} alt="" />
            <p className='chat-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, perspiciatis aliquam error at quos, quod dolor est quibusdam cumque quo aspernatur maiores. Dolore ea quasi laudantium iure vitae, quo vel!</p>
        </div>
    </div>
  )
}

export default Converse