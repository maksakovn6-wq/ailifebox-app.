import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const demoTranslations: Record<string, Record<string, string>> = {
  'Hello': { ru: 'Привет', kk: 'Сәлем', en: 'Hello' },
  'Привет': { en: 'Hello', kk: 'Сәлем', ru: 'Привет' },
  'How are you?': { ru: 'Как дела?', kk: 'Қалайсың?', en: 'How are you?' },
  'Спасибо': { en: 'Thank you', kk: 'Рахмет', ru: 'Спасибо' },
}

export default function Translator() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [text, setText] = useState('')
  const [from, setFrom] = useState('auto')
  const [to, setTo] = useState('en')
  const [result, setResult] = useState('')

  const translate = () => {
    if (!text.trim()) return
    const lower = text.trim()
    const found = demoTranslations[lower]
    if (found && found[to]) {
      setResult(found[to])
    } else {
      setResult(`[Demo] Translated to ${to.toUpperCase()}: ${text}`)
    }
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </button>
        <h2>{t('translator')}</h2>
      </div>

      <div className="form-group">
        <label>{t('from')}</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="auto">Auto</option>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="kk">Қазақша</option>
        </select>
      </div>

      <div className="form-group">
        <label>{t('to')}</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
          <option value="kk">Қазақша</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('enterText')}
        />
      </div>

      <button className="primary-btn" onClick={translate}>
        {t('translate')}
      </button>

      {result && (
        <div className="result-box">
          <strong>{t('result')}:</strong>
          <p style={{ marginTop: 8 }}>{result}</p>
        </div>
      )}
    </div>
  )
}
