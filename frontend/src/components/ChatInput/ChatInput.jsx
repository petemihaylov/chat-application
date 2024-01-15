import React from 'react'
import './ChatInput.scss'

const ChatInput = ({ send }) => {
  return (
    <div className="chat-input">
      <input placeholder="Message" focus onKeyDown={send} />
    </div>
  )
}

export default ChatInput
