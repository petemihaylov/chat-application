'use client'
import React, { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

import { connect, sendMsg } from './api'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'

function App() {
  const [chatHistory, setHistory] = useState([])

  useEffect(() => {
    connect((msg) => {
      console.log('New Message')
      setHistory((prevHistory) => [...prevHistory, msg])
    })
  }, [])

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  )
}

export default App
