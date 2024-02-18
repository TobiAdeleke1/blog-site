import React, { useLayoutEffect, useState } from "react"
// import { graphql, useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import styled from "styled-components"

// import CategoryFilter from "~/src/components/categoryFilter"
import PostGrid from "~/src/components/postGrid"
import SEO from "~/src/components/seo"
// import useSiteMetadata from "~/src/hooks/useSiteMetadata"
import Layout from "~/src/layouts/layout"
import Markdown from "~/src/styles/markdown"
import { rhythm } from "~/src/styles/typography"


const Home = ({
  pageContext,
  data,
}) => {
  const [posts, setPosts] = useState([])
  const currentCategory = pageContext.category
  console.log(data)
  // const postData = data.home.allMarkdownRemark.edges
  const postData = data.home.edges

  useLayoutEffect(() => {
    const filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => node?.frontmatter?.category === currentCategory
        )
      : postData

    filteredPostData.forEach(({ node }) => {
      const { id } = node
      const { slug } = node.fields
      const { title, desc, date, category, thumbnail, alt } = node.frontmatter
      const { childImageSharp } = thumbnail

      setPosts(prevPost => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp?.id,
          alt,
        },
      ])
    })
  }, [currentCategory, postData])

  // const site = useSiteMetadata()
  // const postTitle = currentCategory || site.postTitle
  const postTitle = "Recent Posts"
  // const aboutData = useStaticQuery(graphql`
  //   query About {
  //     allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
  //       edges {
  //         node {
  //           html
  //         }
  //       }
  //     }
  //   }
  // `)

  // const markdown = aboutData.allMarkdownRemark.edges[0].node.html 
  const markdown = data.about.edges[0].node.html 

  // categoryList={data.home.allMarkdownRemark.group}
  return (
    <>
    <Layout>
      {/* <SEO title="About" /> */}
      <SEO title="Home" />
      <Container
        dangerouslySetInnerHTML={{ __html: markdown ?? "" }}
        rhythm={rhythm}
       >
       
       </Container> 
       
       <Main>
        <Content>
          <PostTitle>{postTitle}</PostTitle>
          <PostGrid posts={posts.slice(0,2)} />
        </Content>
        </Main>
        <MainProject>
          <ContentProject>
            <ProjectTitle>Notable Projects</ProjectTitle>
            <PostGrid posts={posts.slice(0,1)} />
          </ContentProject>
        </MainProject>        
     </Layout>
     {/* <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <CategoryFilter categoryList={data.home.group} />
          <PostTitle>{postTitle}</PostTitle>
          <PostGrid posts={posts.slice(0,2)} />
        </Content>
      </Main>
    </Layout> */}
    </>
   
  )
}

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-background);
`

const Content = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`


const ContentProject = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;
  background-color:rgb(255,255,255);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`

const MainProject = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: rgb(255,255,255);
`

const PostTitle = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-md);
  line-height: 1.21875;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`
const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: var(--font-weight-extra-bold);
  margin-bottom: var(--sizing-md);
  line-height: 1.21875;
  background-color:rgb(255,255,255);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    font-size: 1.75rem;
  }
`

const Container = styled(Markdown).attrs({
  as: "main",
})`
  width: var(--post-width);
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 6rem;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-xl);
    width: 87.5%;
  }

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: var(--sizing-lg);

    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    @media (max-width: ${({ theme }) => theme.device.sm}) {
      font-size: 1.25rem;
    }
  }
`
// https://www.codeconcisely.com/posts/how-to-run-multiple-queries-in-gatsby/
export const query = graphql`
  query homeAndAbout {
    home: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { frontmatter: { date: DESC } }
    ) {
      group(field: { frontmatter: { category: SELECT } }) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }

    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          html
        }
      }
    }



  }
`

export default Home
