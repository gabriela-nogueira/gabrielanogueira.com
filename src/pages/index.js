import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ItemPost from "../components/ItemPost"



const IndexPage = () => {
  const  { allMarkdownRemark } = useStaticQuery(graphql`
  query PostList {
    allMarkdownRemark (sort: {fields: frontmatter___date, order:DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            tag
            title
          }
          timeToRead
        }
      }
    }
  }  
  `
  )

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
    <SEO title="Gabriela Nogueira | Blog sobre Data Science e Tecnologia" ></SEO>
    {postList.map(({
      node : {
        frontmatter: {date, tag, title},
        timeToRead,
        fields : {slug}
      },
    }) => (
    <ItemPost
    slug={slug}
    title={title}
    date={date}
    timeToRead={timeToRead}
    tag={tag}
    />
    ))}
  </Layout>
  )
}

export default IndexPage
