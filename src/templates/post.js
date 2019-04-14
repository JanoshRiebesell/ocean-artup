import React from "react"
import { graphql } from "gatsby"

import Global from "../components/Global"
import PageTitle from "../components/PageTitle"
import { PageBody } from "../components/styles"
import PostMeta from "../components/PostMeta"

const PostTemplate = ({ data: { post }, location }) => {
  const { title, body, cover } = post
  const { html, excerpt } = body.remark
  return (
    <Global
      pageTitle={title}
      path={location.pathname}
      description={excerpt}
      hero={cover}
    >
      <PageTitle backdrop img={cover}>
        <h1>{title}</h1>
        <PostMeta inTitle {...post} />
      </PageTitle>
      <PageBody dangerouslySetInnerHTML={{ __html: html }} />
    </Global>
  )
}

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      ...postFields
    }
  }
`
