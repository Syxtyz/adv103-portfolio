import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import { ThemeProvider } from './lib/theme-provider.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home.tsx'
import ExperiencePage from './pages/experience.tsx'
import JournalPage from './pages/journal.tsx'
import SkillPage from './pages/skill.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme='dark' storageKey='theme'>
        <App />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/skills" element={<SkillPage />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
