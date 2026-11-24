import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Send } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface Message {
  id: number
  role: 'user' | 'ai'
  text: string
}

const demoResponses = [
  'I understand your question. This is a demo response — in the full version I will give real AI answers.',
  'Interesting! In the complete AI LIFEBOX I will be able to help with this in detail.',
  'Got it. Demo mode is active. Real AI integration will be added later.',
  'Thank you for testing! The full version will support real conversations with AI.',
]

export default function Chat() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'ai', text: t('demoMode') }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = () => {
    if (!input.trim()) return
    const userMsg: Message = { id: Date.now(), role: 'user', text: input }
    const aiMsg: Message = {
      id: Date.now() + 1,
      role: 'ai',
      text: demoResponses[Math.floor(Math.random() * demoResponses.length)]
    }
    setMessages((prev) => [...prev, userMsg, aiMsg])
    setInput('')
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </button>
        <h2>{t('chat')}</h2>
      </div>

      <div className="chat-container">
        <div className="messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.role}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={t('typeMessage')}
          />
          <button className="send-btn" onClick={sendMessage}>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
