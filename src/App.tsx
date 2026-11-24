import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Translator from './pages/Translator'
import Camera from './pages/Camera'
import Documents from './pages/Documents'
import Reminders from './pages/Reminders'
import { LanguageProvider } from './i18n/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/translator" element={<Translator />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/reminders" element={<Reminders />} />
        </Routes>
      </div>
    </LanguageProvider>
  )
}

export default App
