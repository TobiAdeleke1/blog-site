import React, { useContext, useEffect, useRef } from "react"

import { DARK } from "~/src/constants/theme"
import useSiteMetadata from "~/src/hooks/useSiteMetadata"
import ThemeContext from "~/src/stores/themeContext"

const src = "https://utteranc.es" 
const utterancesSelector = "iframe.utterances-frame"
const LIGHT_THEME = "github-light"
const DARK_THEME = "github-dark"


const Comment = () => {
  const site = useSiteMetadata()
  const { repo } = site.utterances ?? { repo: undefined }
  const theme = useContext(ThemeContext)
  const containerRef = useRef(null)
  const isUtterancesCreated = useRef(false)

  useEffect(() => {
    if (!repo) return
    let themeMode

    if (!isUtterancesCreated.current) {
      themeMode =
        document.body.dataset.theme === DARK ? DARK_THEME : LIGHT_THEME
    } else themeMode = theme === DARK ? DARK_THEME : LIGHT_THEME

    const createUtterancesEl = () => {
      const comment = document.createElement("script")
      const attributes = {
        src: `${src}/client.js`,
        repo,
        "issue-term": "title",
        label: "comment",
        theme: themeMode,
        crossOrigin: "anonymous",
        async: "true",
      }
      Object.entries(attributes).forEach(([key, value]) => {
        comment.setAttribute(key, value)
      })
      containerRef.current?.appendChild(comment)
      isUtterancesCreated.current = true
    }

    const utterancesEl = containerRef.current?.querySelector(
      utterancesSelector
    )

    const postThemeMessage = () => {
      if (!utterancesEl) return
      const message = {
        type: "set-theme",
        theme: themeMode,
      }
      utterancesEl?.contentWindow?.postMessage(message, src)
    }

    isUtterancesCreated.current ? postThemeMessage() : createUtterancesEl()
  }, [repo, theme])

  return <div ref={containerRef} />
}

Comment.displayName = "comment"

export default Comment
