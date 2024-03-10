import React from "react"

import { Link } from "gatsby"
import { isNil } from "lodash"

const ROOT = "/"
const EXTERNAL_LINK_EXP =
  /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi


const LinkList = ({ links, setToggle }) => {
  const generateLink = (props) => {
    if (isNil(props)) {
      return
    }

    const { link, name } = props
    const safeLink = isNil(link) ? "" : link
    const isExternalLink = EXTERNAL_LINK_EXP.test(safeLink)
    if (safeLink === ROOT) {
      return (
        <li key={name}>
          <Link to={safeLink} onClick={() => setToggle(false)}>
            {name}
          </Link>
        </li>
      )
    }
    if (isExternalLink) {
      return (
        <li key={name}>
          <a target="__blank" rel="noreferrer" href={safeLink}>
            {name}
          </a>
        </li>
      )
    }
    return (
      <li key={name}>
        <Link to={safeLink}>{name}</Link>
      </li>
    )
  }

  return <>{links?.map(generateLink)}</>
}

export default LinkList
