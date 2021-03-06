import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import ItemPost from "../components/ItemPost"

const AnalisePage = () => {
    const  { allMarkdownRemark } = useStaticQuery(graphql`
  query ListaEngenharia {
    allMarkdownRemark(filter: {frontmatter: {tag: {eq: "engenharia"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            tag
            title
            imagem
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
    <>
    <Layout>
    <SEO title="Gabriela Nogueira | Blog sobre Data Science e Tecnologia" ></SEO>
    {analisePost.map(({
      node : {
        frontmatter: {date, tag, title, imagem},
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
    image={imagem}
    />
    ))}
  </Layout>
  <Footer></Footer>
  </>
  )
}

export default AnalisePage