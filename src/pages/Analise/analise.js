import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import ItemPost from "../../components/ItemPost"

const AnalisePage = () => {
    const  { allMarkdownRemark } = useStaticQuery(graphql`
  query ListaAnalise2 {
    allMarkdownRemark(filter: {frontmatter: {tag: {eq: "analise"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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

  const analisePost = allMarkdownRemark.edges

  return (
    <Layout>
    <SEO title="Gabriela Nogueira | Blog sobre Data Science e Tecnologia" ></SEO>
    {analisePost.map(({
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

export default AnalisePage