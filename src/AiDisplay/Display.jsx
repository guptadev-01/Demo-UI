import React from 'react'
import './Display.css'
import artificial from '../assets/artificial.svg'
import arrow from '../assets/arrow.svg'

const Display = () => {
  return (
    <div className='place'>
        <div className='disp'>
          <img src={artificial} alt="AI" />
          <h3>Hi, I am your AI</h3>
          <p>Ask me anything abount this conversation.</p>
        </div>
        <div className='ask-in-footer'>
            <p><strong>Suggested</strong> How do I get a job?</p>
            <div className='input'>
                <input type="text" placeholder='Ask a question...' />
                <img src={arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Display