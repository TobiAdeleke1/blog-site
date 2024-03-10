import { useCallback, useEffect, useState } from "react"

import { DARK, LIGHT } from "../constants/theme"


const useTheme = () => {
  const [theme, setTheme] = useState(null)

  const themeToggler = useCallback(() => {
    const nextTheme = theme === LIGHT ? DARK : LIGHT
    setTheme(nextTheme)
    window.__setPreferredTheme(nextTheme)
  }, [theme])

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTheme(window.__theme)
    }

    window.__onThemeChange = newTheme => {
      setTheme(newTheme)
    }
  }, [])


  return {
    theme,
    themeToggler,
  }
}


export default useTheme
