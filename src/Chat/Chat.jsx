import React from 'react'
import './Chat.css'
import chat from '../assets/chat.svg'
import voicechat from '../assets/voicechat.svg'
import bolt from '../assets/bolt.svg'
import bookmark from '../assets/bookmark.svg'
import reaction from '../assets/reaction.svg'

const Chat = () => {
  return (
    <div className='talk'>
        <select name="slection" id="select">
            <option value="">Chat</option>
            <option value="">Voice Chat</option>
        </select>
        <input type="text" placeholder='Use XK for shortcuts' />
        <div className='icons'>
            <img src={bolt} alt="" />
            <img src={bookmark} alt="" />
            <img src={reaction} alt="" />
        </div>
    </div>
  )
}

export default Chat