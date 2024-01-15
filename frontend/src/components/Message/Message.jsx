import React, { useState } from 'react'
import './Message.scss'

const Message = ({ input }) => {
  const [message, setMessage] = useState(JSON.parse(input))

  return <div className="message">{message.body}</div>
}

export default Message
