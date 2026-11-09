"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"

export type Theme = "light" | "purple" | "green"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const THEMES: Theme[] = ["light", "purple", "green"]

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [theme, setThemeState] = useState<Theme>("light")

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("smart-home-theme") as Theme | null
    const next = saved && THEMES.includes(saved) ? saved : "light"
    setThemeState(next)
    applyTheme(next)
  }, [])

  const setTheme = useCallback(
    (next: Theme) => {
      setThemeState(next)
      localStorage.setItem("smart-home-theme", next)
      applyTheme(next)
    },
    []
  )

  useEffect(() => {
    if (mounted) {
      applyTheme(theme)
    }
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { THEMES }

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return
  document.documentElement.removeAttribute("data-theme")
  if (theme !== "light") {
    document.documentElement.setAttribute("data-theme", theme)
  }
}
