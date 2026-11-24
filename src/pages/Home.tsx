import { useNavigate } from 'react-router-dom'
import { MessageCircle, Camera, Languages, FileText, Bell } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const tools = [
  { path: '/chat', icon: MessageCircle, color: '#6366F1', titleKey: 'chat', descKey: 'chatDesc' },
  { path: '/camera', icon: Camera, color: '#10B981', titleKey: 'camera', descKey: 'cameraDesc' },
  { path: '/translator', icon: Languages, color: '#F59E0B', titleKey: 'translator', descKey: 'translatorDesc' },
  { path: '/documents', icon: FileText, color: '#EF4444', titleKey: 'documents', descKey: 'documentsDesc' },
  { path: '/reminders', icon: Bell, color: '#8B5CF6', titleKey: 'reminders', descKey: 'remindersDesc' },
] as const

export default function Home() {
  const navigate = useNavigate()
  const { t, language, setLanguage } = useLanguage()

  return (
    <>
      <header className="header">
        <h1>{t('appTitle')}</h1>
        <div className="lang-switcher">
          {(['en', 'ru', 'kk'] as const).map((lang) => (
            <button
              key={lang}
              className={language === lang ? 'active' : ''}
              onClick={() => setLanguage(lang)}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="home">
        <h2 className="home-title">{t('homeTitle')}</h2>
        <div className="tools-grid">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <div
                key={tool.path}
                className="tool-card"
                onClick={() => navigate(tool.path)}
              >
                <div className="tool-icon" style={{ background: tool.color + '26' }}>
                  <Icon size={24} color={tool.color} />
                </div>
                <h3>{t(tool.titleKey)}</h3>
                <p>{t(tool.descKey)}</p>
              </div>
            )
          })}
        </div>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginTop: 24, fontSize: 13 }}>
          {t('demoMode')}
        </p>
      </main>
    </>
  )
}
