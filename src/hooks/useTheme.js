import { useCallback, useEffect, useState } from "react"

import { DARK, LIGHT } from "../constants/theme"

/** @see gatsby-ssr.js */
// declare global {
//   interface Window {
//     __theme: string
//     __setPreferredTheme: (theme: string) => void
//     __onThemeChange: (theme: string) => void
//   }
// }

const useTheme = () => {
  // const [theme, setTheme] = useState<string | null>(null)
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

  // return {
  //   theme,
  //   themeToggler,
  // } as const
  return {
    theme,
    themeToggler,
  }
}

// export type UseThemeReturnType = ReturnType<typeof useTheme>

export default useTheme
