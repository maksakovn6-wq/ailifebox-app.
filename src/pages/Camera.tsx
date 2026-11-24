import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Camera as CameraIcon } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Camera() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [preview, setPreview] = useState<string | null>(null)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPreview(url)
      setResult('')
    }
  }

  const analyze = () => {
    if (!preview) return
    setLoading(true)
    setTimeout(() => {
      setResult('Demo analysis: This appears to be a photo. In the full version AI will describe objects, text, and details in the image.')
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </button>
        <h2>{t('camera')}</h2>
      </div>

      <div className="form-group">
        <label>{t('uploadPhoto')}</label>
        <input type="file" accept="image/*" capture="environment" onChange={handleFile} />
      </div>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: '100%', borderRadius: 16, marginBottom: 16 }}
        />
      )}

      <button className="primary-btn" onClick={analyze} disabled={!preview || loading}>
        {loading ? t('analyzing') : t('analyze')}
      </button>

      {result && <div className="result-box">{result}</div>}
    </div>
  )
}
