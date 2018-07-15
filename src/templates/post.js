import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Helmet from '../components/Helmet'
import PostTitle from '../components/PostTitle'

const PostTemplate = ({ data, location }) => {
  const { post, site } = data
  const { title, date, body } = post
  const { timeToRead, html, excerpt } = body.data
  const path = location.pathname
  return (
    <Layout>
      <Helmet pageTitle={title} site={site} path={path} description={excerpt} />
      <PostTitle title={title} date={date} timeToRead={timeToRead} />
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default PostTemplate

export const postFields = graphql`
  fragment postFields on ContentfulBlogPost {
    slug
    title
    category {
      title
    }
    date(formatString: "MMMM DD, YYYY")
    body {
      data: childMarkdownRemark {
        html
        timeToRead
        excerpt(pruneLength: 250)
      }
    }
  }
`

export const postQuery = graphql`
  query($slug: String!) {
    ...siteMetaQuery
    post: contentfulBlogPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`