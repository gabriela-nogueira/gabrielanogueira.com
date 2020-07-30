import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import SEO from "../components/seo"
import * as S from "../components/Post/style"

const BlogPost = ({ data }) => {
    const post = data.markdownRemark
    return (
        <>
        <Layout>
        <SEO title={post.frontmatter.title + ' | Gabriela Nogueira'}/>
        <S.PostWrapper>
            <S.TitlePost>{post.frontmatter.title}</S.TitlePost>
            <S.InfoPost>
                Tag: <S.Tag>{post.frontmatter.tag}</S.Tag>  | {post.frontmatter.date} • {post.timeToRead} min de leitura
            </S.InfoPost>
        <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        </S.MainContent>
        </S.PostWrapper>
        </Layout>
        
        </>
    )
    
}

export const query = graphql`
query PostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        frontmatter {
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          tag
          title
        }
        html
        timeToRead
      }
  }
`

export default BlogPost