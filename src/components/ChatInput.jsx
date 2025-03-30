import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from '@/components/ChatMessage'

import audio1 from '@/audio/audio-1.mp3'

const ChatInput = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      order: 1,
      audio: audio1,
      text: 'Tire uma foto do produto que você deseja reciclar. Esteja em um ambiente claro e mantenha o produto dentro do espaço indicado. ',
      preview: true,
      agent: true,
    },
  ])

  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      if (chatMessages.length > 0) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
      } else {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [chatMessages])

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F5FC]">
      {chatMessages.map((message, index) => (
        <div key={index}>
          <ChatMessage
            message={message}
            setChatMessages={setChatMessages}
            chatMessages={chatMessages}
          />
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatInput
