import React from "react"

import { Helmet } from "react-helmet"

import useSiteMetadata from "~/src/hooks/useSiteMetadata"

import defaultOpenGraphImage from "../images/og-default.png"

const DEFAULT_LANG = "en"

const SEO = ({ title, desc = "", image }) => {
  const site = useSiteMetadata()
  const description = desc || site.description
  const ogImageUrl =
    site.siteUrl ?? "" + (image || (defaultOpenGraphImage))

  return (
    <Helmet
      htmlAttributes={{ lang: site.lang ?? DEFAULT_LANG }}
      title={title ?? ""}
      titleTemplate={`%s | ${site.title}`}
      meta={
        [
          {
            name: "description",
            content: description,
          },
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:creator",
            content: site.author,
          },
          {
            name: "twitter:title",
            content: title,
          },
          {
            name: "twitter:description",
            content: description,
          },
          {
            property: "image",
            content: ogImageUrl,
          },
          {
            property: "og:image",
            content: ogImageUrl,
          },
          {
            property: "twitter:image",
            content: ogImageUrl,
          },
        ] 
      }
    />
  )
}

export default SEO