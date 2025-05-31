import React from 'react'
import './App.css'
import Navbar from './navbar/Navbar'
import Converse from './converse/Converse'
import Chat from './Chat/Chat'
import Ainav from './AiNav/Ainav'
import Display from './AiDisplay/Display'


const App = () => {
  return (
    <div className='align'>
      <div className='align-2'>
        <Navbar />
        <div className='chatting'>
          <Converse />
          <Chat/>
        </div>
      </div>
      <div className='artificial'>
        <Ainav />
        <div>
          <Display />
        </div>
      </div>
    </div>
  )
}

export default App