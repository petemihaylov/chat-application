'use client'
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

import { connect, sendMsg } from './api'
import ChatHistory from './components/ChatHistory'

function App() {
  const [chatHistory, setHistory] = useState([])

  useEffect(() => {
    connect((msg) => {
      console.log('New Message')
      setHistory((prevHistory) => [...prevHistory, msg])
    })
  }, [])

  const send = () => {
    sendMsg('Hello')
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Send</button>
    </div>
  )
}

export default App
