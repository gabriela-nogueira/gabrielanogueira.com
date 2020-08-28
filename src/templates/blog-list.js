import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/Layout"
import SEO from "../components/seo"
import ItemPost from "../components/ItemPost"
import Pagination from "../components/Pagination"
import Footer from "../components/Footer"


const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges

    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/` : `/page/${currentPage - 1}`
    const nextPage = `/page/${currentPage + 1}`


    return (
        <>
       <Layout>
            <SEO title="Gabriela Nogueira | Blog sobre Data Science e Tecnologia" ></SEO>
            {postList.map(({
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
            image = {imagem}
            />
            ))}
        </Layout>
        <Pagination isFirst={isFirst} isLast={isLast} currentPage={currentPage} numPages={numPages} prevPage={prevPage} nextPage={nextPage}/>
        <Footer/>      
        </>
    )
    
}

export const query = graphql`
query PostList($skip : Int!, $limit: Int!) {
    allMarkdownRemark (sort: {fields: frontmatter___date, order:DESC}
        limit: $limit
        skip: $skip
        ) {
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

export default BlogList