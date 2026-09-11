import React, { useState, useEffect } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeToggle({ className = '', compact = false }) {
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem('higherit-theme') || 'system'
    } catch (e) {
      return 'system'
    }
  })

  const applyTheme = (selectedMode) => {
    let effectiveTheme = selectedMode
    if (selectedMode === 'system') {
      effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    document.documentElement.setAttribute('data-theme', effectiveTheme)
  }

  const handleSelectMode = (newMode) => {
    setMode(newMode)
    try {
      localStorage.setItem('higherit-theme', newMode)
    } catch (e) {}
    applyTheme(newMode)
  }

  useEffect(() => {
    applyTheme(mode)

    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => applyTheme('system')
      
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange)
      } else {
        mediaQuery.addListener(handleChange)
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleChange)
        } else {
          mediaQuery.removeListener(handleChange)
        }
      }
    }
  }, [mode])

  return (
    <div className={`theme-toggle-pill ${compact ? 'compact' : ''} ${className}`}>
      <button
        type="button"
        className={`theme-btn ${mode === 'light' ? 'active' : ''}`}
        onClick={() => handleSelectMode('light')}
        title="Light Mode"
        aria-label="Light Mode"
      >
        <Sun style={{ width: 14, height: 14 }} />
        {!compact && <span>Light</span>}
      </button>

      <button
        type="button"
        className={`theme-btn ${mode === 'system' ? 'active' : ''}`}
        onClick={() => handleSelectMode('system')}
        title="System Preference"
        aria-label="System Preference"
      >
        <Monitor style={{ width: 14, height: 14 }} />
        {!compact && <span>Auto</span>}
      </button>

      <button
        type="button"
        className={`theme-btn ${mode === 'dark' ? 'active' : ''}`}
        onClick={() => handleSelectMode('dark')}
        title="Dark Mode"
        aria-label="Dark Mode"
      >
        <Moon style={{ width: 14, height: 14 }} />
        {!compact && <span>Dark</span>}
      </button>
    </div>
  )
}

export default ThemeToggle
