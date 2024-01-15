import React from 'react'
import './ChatHistory.scss'
import Message from '../Message'

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, index) => (
    <Message key={index} input={msg.data} />
  ))

  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      {messages}
    </div>
  )
}

export default ChatHistory
