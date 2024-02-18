import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  // const { site } = useStaticQuery<SiteMetaData>(
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            utterances {
              repo
            }
            postTitle
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}


export default useSiteMetadata
