import { graphql, useStaticQuery } from "gatsby"

// interface SiteMetaData {
//   site: {
//     siteMetadata: Queries.SiteSiteMetadata
//   }
// }

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

// export type UseSiteMetaDataReturnType = ReturnType<typeof useSiteMetadata>

export default useSiteMetadata
