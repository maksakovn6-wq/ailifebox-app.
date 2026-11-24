import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

interface Reminder {
  id: number
  title: string
  created: string
}

export default function Reminders() {
  const navigate = useNavigate()
  const { t } = useLanguage()
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('ailifebox-reminders')
    if (saved) setReminders(JSON.parse(saved))
  }, [])

  const save = (list: Reminder[]) => {
    setReminders(list)
    localStorage.setItem('ailifebox-reminders', JSON.stringify(list))
  }

  const add = () => {
    if (!title.trim()) return
    const newItem: Reminder = {
      id: Date.now(),
      title: title.trim(),
      created: new Date().toLocaleDateString(),
    }
    save([newItem, ...reminders])
    setTitle('')
  }

  const remove = (id: number) => {
    save(reminders.filter((r) => r.id !== id))
  }

  return (
    <div className="page">
      <div className="page-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
        </button>
        <h2>{t('reminders')}</h2>
      </div>

      <div className="form-group">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && add()}
          placeholder={t('reminderTitle')}
        />
      </div>
      <button className="primary-btn" onClick={add}>
        {t('addReminder')}
      </button>

      <div style={{ marginTop: 24 }}>
        {reminders.length === 0 ? (
          <div className="empty-state">{t('noReminders')}</div>
        ) : (
          reminders.map((r) => (
            <div key={r.id} className="reminder-item">
              <div>
                <div>{r.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{r.created}</div>
              </div>
              <button className="delete" onClick={() => remove(r.id)}>
                <Trash2 size={18} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
