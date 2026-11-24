import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Documents() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [fileName, setFileName] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      setResult('')
    }
  }

  const summarize = () => {
    if (!fileName) return
    setLoading(true)
    setTimeout(() => {
      setResult(`Demo summary of "${fileName}": This is a placeholder. In the full version AI will extract text from PDF/DOCX and provide a real summary and Q&A.`)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </button>
        <h2>{t('documents')}</h2>
      </div>

      <div className="form-group">
        <label>{t('uploadDoc')}</label>
        <input type="file" accept=".pdf,.doc,.docx,.txt,.png,.jpg" onChange={handleFile} />
        {fileName && <p style={{ marginTop: 8, color: 'var(--text-muted)' }}>{fileName}</p>}
      </div>

      <button className="primary-btn" onClick={summarize} disabled={!fileName || loading}>
        {loading ? '...' : t('summarize')}
      </button>

      {result && <div className="result-box">{result}</div>}
    </div>
  )
}
